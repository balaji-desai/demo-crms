"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var text_base_1 = require("ui/text-base");
var masked_text_field_common_1 = require("./masked-text-field-common");
__export(require("./masked-text-field-common"));
var MaskedTextField = (function (_super) {
    __extends(MaskedTextField, _super);
    function MaskedTextField() {
        var _this = _super.call(this) || this;
        _this._delegate = MaskedTextFieldDelegate.initWithOwnerAndDefaultImplementation(new WeakRef(_this), _this._delegate);
        return _this;
    }
    MaskedTextField.prototype[masked_text_field_common_1.textProperty.getDefault] = function () {
        return "";
    };
    MaskedTextField.prototype[masked_text_field_common_1.textProperty.setNative] = function (value) {
        this._setNativeText(value);
    };
    MaskedTextField.prototype._setNativeText = function (value) {
        var style = this.style;
        var dict = new Map();
        switch (style.textDecoration) {
            case "none":
                break;
            case "underline":
                dict.set(NSUnderlineStyleAttributeName, 1);
                break;
            case "line-through":
                dict.set(NSStrikethroughStyleAttributeName, 1);
                break;
            case "underline line-through":
                dict.set(NSUnderlineStyleAttributeName, 1);
                dict.set(NSStrikethroughStyleAttributeName, 1);
                break;
            default:
                throw new Error("Invalid text decoration value: " + style.textDecoration + ". Valid values are: 'none', 'underline', 'line-through', 'underline line-through'.");
        }
        if (style.letterSpacing !== 0) {
            dict.set(NSKernAttributeName, style.letterSpacing * this.nativeView.font.pointSize);
        }
        if (style.color) {
            dict.set(NSForegroundColorAttributeName, style.color.ios);
        }
        var stringValue = (value === undefined || value === null) ? "" : value.toString();
        var source = text_base_1.getTransformedText(stringValue, this.textTransform);
        if (dict.size > 0) {
            var result = NSMutableAttributedString.alloc().initWithString(source);
            result.setAttributesRange(dict, { location: 0, length: source.length });
            this.nativeView.attributedText = result;
        }
        else {
            this.nativeView.attributedText = undefined;
            this.nativeView.text = source;
        }
    };
    return MaskedTextField;
}(masked_text_field_common_1.MaskedTextFieldBase));
exports.MaskedTextField = MaskedTextField;
var MaskedTextFieldDelegate = (function (_super) {
    __extends(MaskedTextFieldDelegate, _super);
    function MaskedTextFieldDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaskedTextFieldDelegate_1 = MaskedTextFieldDelegate;
    MaskedTextFieldDelegate.initWithOwnerAndDefaultImplementation = function (owner, defaultImplementation) {
        var delegate = MaskedTextFieldDelegate_1.new();
        delegate._owner = owner;
        delegate._defaultImplementation = defaultImplementation;
        return delegate;
    };
    MaskedTextFieldDelegate.prototype.textFieldShouldBeginEditing = function (textField) {
        return this._defaultImplementation.textFieldShouldBeginEditing(textField);
    };
    MaskedTextFieldDelegate.prototype.textFieldDidBeginEditing = function (textField) {
        textField.selectedTextRange = textField.textRangeFromPositionToPosition(textField.beginningOfDocument, textField.beginningOfDocument);
    };
    MaskedTextFieldDelegate.prototype.textFieldDidEndEditing = function (textField) {
        this._defaultImplementation.textFieldDidEndEditing(textField);
    };
    MaskedTextFieldDelegate.prototype.textFieldShouldClear = function (textField) {
        return this._defaultImplementation.textFieldShouldClear(textField);
    };
    MaskedTextFieldDelegate.prototype.textFieldShouldReturn = function (textField) {
        return this._defaultImplementation.textFieldShouldReturn(textField);
    };
    MaskedTextFieldDelegate.prototype.textFieldShouldChangeCharactersInRangeReplacementString = function (textField, range, replacementString) {
        var owner = this._owner.get();
        var isBackwardsIn = (replacementString === "");
        var newCaretPositionNumber = owner._updateMaskedText(range.location, range.length, replacementString, isBackwardsIn);
        var caretPosition = textField.positionFromPositionOffset(textField.beginningOfDocument, newCaretPositionNumber);
        textField.selectedTextRange = textField.textRangeFromPositionToPosition(caretPosition, caretPosition);
        return false;
    };
    MaskedTextFieldDelegate = MaskedTextFieldDelegate_1 = __decorate([
        ObjCClass(UITextFieldDelegate)
    ], MaskedTextFieldDelegate);
    return MaskedTextFieldDelegate;
    var MaskedTextFieldDelegate_1;
}(NSObject));
