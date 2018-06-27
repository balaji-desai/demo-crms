"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var nativescript_angular_1 = require("nativescript-angular");
var forms_2 = require("nativescript-angular/forms");
var text_value_accessor_1 = require("nativescript-angular/forms/value-accessors/text-value-accessor");
nativescript_angular_1.registerElement("MaskedTextField", function () { return require("../masked-text-field").MaskedTextField; });
var MASKED_TEXT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedTextValueAccessor; }), multi: true
};
var MaskedTextValueAccessor = (function (_super) {
    __extends(MaskedTextValueAccessor, _super);
    function MaskedTextValueAccessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaskedTextValueAccessor.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "MaskedTextField[ngModel], MaskedTextField[formControlName], MaskedTextField[formControl]" +
                        "maskedTextField[ngModel], maskedTextField[formControlName], maskedTextField[formControl]" +
                        "masked-text-field[ngModel], masked-text-field[formControlName], masked-text-field[formControl]",
                    providers: [MASKED_TEXT_VALUE_ACCESSOR],
                    host: {
                        "(touch)": "onTouched()",
                        "(textChange)": "onChange($event.value)"
                    }
                },] },
    ];
    return MaskedTextValueAccessor;
}(text_value_accessor_1.TextValueAccessor));
exports.MaskedTextValueAccessor = MaskedTextValueAccessor;
var MaskedTextFieldModule = (function () {
    function MaskedTextFieldModule() {
    }
    MaskedTextFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        MaskedTextValueAccessor
                    ],
                    providers: [],
                    imports: [
                        forms_1.FormsModule,
                        forms_2.NativeScriptFormsModule
                    ],
                    exports: [
                        forms_1.FormsModule,
                        MaskedTextValueAccessor
                    ]
                },] },
    ];
    return MaskedTextFieldModule;
}());
exports.MaskedTextFieldModule = MaskedTextFieldModule;
