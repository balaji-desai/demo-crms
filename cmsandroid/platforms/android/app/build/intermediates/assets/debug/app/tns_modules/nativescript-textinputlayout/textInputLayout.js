"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textInputLayout_common_1 = require("./textInputLayout.common");
var view_1 = require("tns-core-modules/ui/core/view");
var text_view_1 = require("tns-core-modules/ui/text-view");
var text_field_1 = require("tns-core-modules/ui/text-field");
function getStyleResourceId(context, name) {
    if (!context || (name || '').length === 0) {
        return null;
    }
    return context.getResources().getIdentifier(name, 'style', context.getPackageName());
}
exports.hintAnimationEnabledProperty = new textInputLayout_common_1.Property({
    name: "hintAnimationEnabled", valueConverter: view_1.booleanConverter
});
exports.hintTextAppearanceProperty = new textInputLayout_common_1.Property({
    name: "hintTextAppearance"
});
exports.counterEnabledProperty = new textInputLayout_common_1.Property({
    name: "counterEnabled", affectsLayout: true, valueConverter: view_1.booleanConverter
});
exports.errorTextAppearanceProperty = new textInputLayout_common_1.Property({
    name: "errorTextAppearance"
});
exports.errorEnabledProperty = new textInputLayout_common_1.Property({
    name: "errorEnabled", affectsLayout: true, valueConverter: view_1.booleanConverter
});
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextInputLayout.prototype, "textField", {
        get: function () { return this._textField; },
        set: function (tf) {
            var old = this._textField;
            if (old) {
                this._removeView(old);
            }
            this._textField = tf;
            if (tf) {
                this._addView(tf);
            }
            this.setupTextView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextInputLayout.prototype, "_childrenCount", {
        get: function () {
            return this._textField ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    TextInputLayout.prototype._addChildFromBuilder = function (name, child) {
        if (!(child instanceof text_view_1.TextView || child instanceof text_field_1.TextField)) {
            throw new Error('TextInputLayout may only have a <TextView> or <TextField> as a child');
        }
        this.textField = child;
    };
    TextInputLayout.prototype.eachChildView = function (callback) {
        if (this._textField) {
            callback(this._textField);
        }
    };
    TextInputLayout.prototype.createNativeView = function () {
        return new android.support.design.widget.TextInputLayout(this._context);
    };
    TextInputLayout.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this.setupTextView();
    };
    TextInputLayout.prototype.setupTextView = function () {
        if (!this.isLoaded) {
            return;
        }
        var textField = this._textField;
        var nativeView = this.nativeView;
        var layoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.LinearLayout.LayoutParams.MATCH_PARENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
        var current = nativeView.getEditText();
        var nativeTextField = textField.nativeView;
        if (current !== nativeTextField) {
            if (current) {
                nativeView.removeView(current);
            }
            nativeView.addView(nativeTextField, 0, layoutParams);
        }
        var txtValue = textField.nativeView.getText();
        nativeTextField.setText('');
        nativeTextField.setText(txtValue);
    };
    TextInputLayout.prototype[textInputLayout_common_1.hintProperty.setNative] = function (value) {
        this.nativeView.setHint(value);
    };
    TextInputLayout.prototype[exports.hintAnimationEnabledProperty.setNative] = function (value) {
        this.nativeView.setHintAnimationEnabled(value);
    };
    TextInputLayout.prototype[exports.hintTextAppearanceProperty.setNative] = function (value) {
        var resourceId = getStyleResourceId(this._context, value);
        if (value && resourceId) {
            this.nativeView.setHintTextAppearance(resourceId);
        }
    };
    TextInputLayout.prototype[exports.errorTextAppearanceProperty.setNative] = function (value) {
        var resourceId = getStyleResourceId(this._context, value);
        if (value && resourceId) {
            this.nativeView.setErrorTextAppearance(resourceId);
        }
    };
    TextInputLayout.prototype[exports.errorEnabledProperty.setNative] = function (value) {
        if (!value && (this.error || '').length > 0) {
            this.error = '';
        }
        this.nativeView.setErrorEnabled(value);
    };
    TextInputLayout.prototype[textInputLayout_common_1.errorProperty.setNative] = function (value) {
        this.nativeView.setError(value || '');
        if ((value || '').length > 0) {
            this.errorEnabled = true;
        }
    };
    TextInputLayout.prototype[exports.counterEnabledProperty.setNative] = function (value) {
        this.nativeView.setCounterEnabled(value);
    };
    return TextInputLayout;
}(textInputLayout_common_1.TextInputLayout));
exports.TextInputLayout = TextInputLayout;
exports.hintAnimationEnabledProperty.register(TextInputLayout);
exports.hintTextAppearanceProperty.register(TextInputLayout);
exports.errorTextAppearanceProperty.register(TextInputLayout);
exports.counterEnabledProperty.register(TextInputLayout);
exports.errorEnabledProperty.register(TextInputLayout);
