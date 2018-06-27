"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator_1 = EqualValidator;
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    EqualValidator = EqualValidator_1 = __decorate([
        core_1.Directive({
            selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return EqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, core_1.Attribute('validateEqual')),
        __metadata("design:paramtypes", [String])
    ], EqualValidator);
    return EqualValidator;
    var EqualValidator_1;
}());
exports.EqualValidator = EqualValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWx2YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlcXVhbHZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRTtBQUNqRSx3Q0FBMkU7QUFPM0U7SUFDSSx3QkFBZ0QsYUFBcUI7UUFBckIsa0JBQWEsR0FBYixhQUFhLENBQVE7SUFBRyxDQUFDO3VCQURoRSxjQUFjO0lBR3ZCLGlDQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN2QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVoQixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZDLGtCQUFrQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFBQyxNQUFNLENBQUM7Z0JBQzNCLGFBQWEsRUFBRSxLQUFLO2FBQ3ZCLENBQUE7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFmUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsd0ZBQXdGO1lBQ2xHLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSxxQkFBYSxFQUFFLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxnQkFBYyxFQUFkLENBQWMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDekY7U0FDSixDQUFDO1FBRWdCLFdBQUEsZ0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQTs7T0FEL0IsY0FBYyxDQWdCMUI7SUFBRCxxQkFBQzs7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbdmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCd2YWxpZGF0ZUVxdWFsJykgcHVibGljIHZhbGlkYXRlRXF1YWw6IHN0cmluZykge31cblxuICAgIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICAvLyBzZWxmIHZhbHVlIChlLmcuIHJldHlwZSBwYXNzd29yZClcbiAgICAgICAgbGV0IHYgPSBjLnZhbHVlO1xuXG4gICAgICAgIC8vIGNvbnRyb2wgdmFsdWUgKGUuZy4gcGFzc3dvcmQpXG4gICAgICAgIGxldCBlID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlRXF1YWwpO1xuXG4gICAgICAgIC8vIHZhbHVlIG5vdCBlcXVhbFxuICAgICAgICBpZiAoZSAmJiB2ICE9PSBlLnZhbHVlKSByZXR1cm4ge1xuICAgICAgICAgICAgdmFsaWRhdGVFcXVhbDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19