"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("tns-core-modules/color");
exports.Color = color_1.Color;
var view_1 = require("tns-core-modules/ui/core/view");
var properties_1 = require("tns-core-modules/ui/core/properties");
exports.Property = properties_1.Property;
var TextInputLayout = (function (_super) {
    __extends(TextInputLayout, _super);
    function TextInputLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextInputLayout;
}(view_1.View));
exports.TextInputLayout = TextInputLayout;
exports.errorProperty = new properties_1.Property({
    name: "error",
    affectsLayout: true
});
exports.errorProperty.register(TextInputLayout);
exports.hintProperty = new properties_1.Property({
    name: "hint",
    affectsLayout: true
});
exports.hintProperty.register(TextInputLayout);
