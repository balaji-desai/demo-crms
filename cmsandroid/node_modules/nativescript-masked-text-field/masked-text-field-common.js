"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var text_field_1 = require("ui/text-field");
__export(require("ui/text-field"));
var MaskedTextFieldBase = (function (_super) {
    __extends(MaskedTextFieldBase, _super);
    function MaskedTextFieldBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._emptyMaskedValue = "";
        _this._placeholder = "_";
        _this._tokenRulesMap = {
            "0": /\d/,
            "9": /\d|\s/,
            "#": /\d|\s|\+|\-/,
            "L": /[a-zA-Z]/,
            "?": /[a-zA-Z]|\s/,
            "&": /\S/,
            "C": /./,
            "A": /[a-zA-Z0-9]/,
            "a": /[a-zA-Z0-9]|\s/
        };
        _this._maskTokens = [];
        return _this;
    }
    MaskedTextFieldBase.prototype._updateMaskedText = function (start, previousCharactersCount, newText, isBackwardsIn) {
        var unmaskedChangedValue = this._getUnmaskedValue(newText, start);
        var newMaskedValue = this._getNewMaskedValue(start, start + previousCharactersCount, unmaskedChangedValue, isBackwardsIn);
        this._setNativeText(newMaskedValue);
        exports.textProperty.nativeValueChange(this, newMaskedValue);
        var newCaretPosition = this._getNextRegExpToken(start, isBackwardsIn);
        if (newCaretPosition === -1) {
            newCaretPosition = start + (isBackwardsIn ? 1 : 0);
        }
        else {
            newCaretPosition = this._getNextRegExpToken(newCaretPosition + unmaskedChangedValue.length, isBackwardsIn);
            if (newCaretPosition === -1) {
                newCaretPosition = this._getNextRegExpToken((isBackwardsIn ? 0 : newMaskedValue.length - 1), !isBackwardsIn)
                    + (!isBackwardsIn ? 1 : 0);
            }
        }
        return newCaretPosition;
    };
    MaskedTextFieldBase.prototype._generateMaskTokens = function () {
        var maskChars = this.mask.split("");
        var emptyMaskedValueBuider = [];
        var isEscapeCharIn = false;
        this._maskTokens.length = 0;
        for (var _i = 0, maskChars_1 = maskChars; _i < maskChars_1.length; _i++) {
            var char = maskChars_1[_i];
            if (isEscapeCharIn) {
                isEscapeCharIn = false;
                this._maskTokens.push(char);
                emptyMaskedValueBuider.push(char);
                continue;
            }
            if (char === "\\") {
                isEscapeCharIn = true;
                continue;
            }
            var tokenRule = this._tokenRulesMap[char];
            this._maskTokens.push(tokenRule || char);
            emptyMaskedValueBuider.push(tokenRule ? this._placeholder : char);
        }
        this._emptyMaskedValue = emptyMaskedValueBuider.join("");
    };
    MaskedTextFieldBase.prototype._getUnmaskedValue = function (value, startTokenIndex) {
        if (!value) {
            return "";
        }
        var resultBuilder = [];
        var chars = value.toString().split("");
        var tokenLoop = startTokenIndex || 0;
        var charLoop = 0;
        while (tokenLoop < this._maskTokens.length && charLoop < chars.length) {
            var char = chars[charLoop];
            var token = this._maskTokens[tokenLoop];
            if (char === token || char === this._placeholder) {
                if (char === this._placeholder) {
                    resultBuilder.push(this._placeholder);
                }
                tokenLoop++;
                charLoop++;
                continue;
            }
            if (token instanceof RegExp) {
                if (token.test(char)) {
                    resultBuilder.push(char);
                    tokenLoop++;
                }
                charLoop++;
                continue;
            }
            tokenLoop++;
        }
        return resultBuilder.join("");
    };
    MaskedTextFieldBase.prototype._getNewMaskedValue = function (replaceStart, replaceEnd, unmaskedReplaceValue, isBackwardsIn) {
        replaceStart = this._getNextRegExpToken(replaceStart, isBackwardsIn);
        if (replaceStart > replaceEnd) {
            replaceEnd = replaceStart;
        }
        var currentValue = this.text || this._emptyMaskedValue;
        var unmaskedValueAndSuffix = unmaskedReplaceValue + this._getUnmaskedValue(currentValue.substring(replaceEnd), replaceEnd);
        var unmaskedValueAndSuffixSplit = unmaskedValueAndSuffix.split("");
        var currentValueSplit = currentValue.split("");
        for (var loop = replaceStart, charLoop = 0; loop > -1 && loop < this._emptyMaskedValue.length; loop = this._getNextRegExpToken(loop + 1), charLoop++) {
            currentValueSplit[loop] = unmaskedValueAndSuffixSplit[charLoop] || this._placeholder;
        }
        return currentValueSplit.join("");
    };
    MaskedTextFieldBase.prototype._getNextRegExpToken = function (start, isBackwardsIn) {
        var step = (isBackwardsIn ? -1 : 1);
        for (var loop = start; loop > -1 && loop < this._maskTokens.length; loop += step) {
            if (this._maskTokens[loop] instanceof RegExp) {
                return loop;
            }
        }
        return -1;
    };
    MaskedTextFieldBase = __decorate([
        view_1.CSSType("MaskedTextField")
    ], MaskedTextFieldBase);
    return MaskedTextFieldBase;
}(text_field_1.TextField));
exports.MaskedTextFieldBase = MaskedTextFieldBase;
exports.maskProperty = new view_1.Property({
    name: "mask",
    defaultValue: "",
    valueChanged: function (target, oldValue, newValue) {
        target._generateMaskTokens();
    }
});
exports.maskProperty.register(MaskedTextFieldBase);
exports.textProperty = new view_1.CoercibleProperty({
    name: "text",
    defaultValue: null,
    coerceValue: function (target, value) {
        if (!target._emptyMaskedValue) {
            return value;
        }
        var unmaskedValue = target._getUnmaskedValue(value);
        return target._getNewMaskedValue(0, target._emptyMaskedValue.length, unmaskedValue);
    }
});
exports.textProperty.register(MaskedTextFieldBase);
