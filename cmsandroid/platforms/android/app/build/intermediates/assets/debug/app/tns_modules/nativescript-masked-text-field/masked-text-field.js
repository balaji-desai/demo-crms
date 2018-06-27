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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isChangingNativeTextIn = false;
        return _this;
    }
    MaskedTextField.prototype.createNativeView = function () {
        var textEdit = _super.prototype.createNativeView.call(this);
        var textWatcher = new MaskedTextFieldTextWatcher(new WeakRef(this));
        textEdit.addTextChangedListener(textWatcher);
        textEdit.textWatcher = textWatcher;
        textEdit.removeTextChangedListener(textEdit.listener);
        return textEdit;
    };
    MaskedTextField.prototype.initNativeView = function () {
        _super.prototype.initNativeView.call(this);
        var nativeView = this.nativeView;
        nativeView.textWatcher.owner = new WeakRef(this);
    };
    MaskedTextField.prototype.disposeNativeView = function () {
        var nativeView = this.nativeView;
        nativeView.textWatcher.owner = null;
        _super.prototype.disposeNativeView.call(this);
    };
    MaskedTextField.prototype[masked_text_field_common_1.textProperty.getDefault] = function () {
        this.nativeView.getText();
    };
    MaskedTextField.prototype[masked_text_field_common_1.textProperty.setNative] = function (value) {
        this._setNativeText(value);
    };
    MaskedTextField.prototype._setNativeText = function (value) {
        var stringValue = (value === null || value === undefined) ? "" : value.toString();
        var transformedText = text_base_1.getTransformedText(stringValue, this.textTransform);
        this._isChangingNativeTextIn = true;
        this.nativeView.setText(transformedText);
        this._isChangingNativeTextIn = false;
    };
    return MaskedTextField;
}(masked_text_field_common_1.MaskedTextFieldBase));
exports.MaskedTextField = MaskedTextField;
var MaskedTextFieldTextWatcher = (function (_super) {
    __extends(MaskedTextFieldTextWatcher, _super);
    function MaskedTextFieldTextWatcher(owner) {
        var _this = _super.call(this) || this;
        _this.owner = owner;
        return global.__native(_this);
    }
    MaskedTextFieldTextWatcher.prototype.beforeTextChanged = function (s, start, count, after) {
    };
    MaskedTextFieldTextWatcher.prototype.onTextChanged = function (s, start, before, count) {
        var owner = this.owner.get();
        if (!owner._isChangingNativeTextIn) {
            var changedText = s.toString().substr(start, count);
            var isBackwardsIn = (count === 0);
            var newCaretPosition = owner._updateMaskedText(start, before, changedText, isBackwardsIn);
            var editText = owner.nativeView;
            editText.setSelection(newCaretPosition);
        }
    };
    MaskedTextFieldTextWatcher.prototype.afterTextChanged = function (s) {
    };
    MaskedTextFieldTextWatcher = __decorate([
        Interfaces([android.text.TextWatcher])
    ], MaskedTextFieldTextWatcher);
    return MaskedTextFieldTextWatcher;
}(java.lang.Object));
