"use strict";
// show-errors.component.ts
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShowErrorsComponent = /** @class */ (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent_1 = ShowErrorsComponent;
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors &&
            (this.control.dirty || this.control.touched);
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field], _this.control); });
    };
    ShowErrorsComponent.prototype.getError = function () {
        //console.log("show",this.control.errors);
        var _this = this;
        var errors = Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field], _this.control); });
        return errors[0];
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params, control) {
        var fname = this.getControlName(control);
        fname = fname.replace("_", " ").replace(" id", "").toLowerCase();
        fname = fname.replace(/\b\w/g, function (l) { return l.toUpperCase(); });
        var msg = ShowErrorsComponent_1.errorMessages[type](params);
        return msg.replace("##FIELD##", fname);
    };
    ShowErrorsComponent.prototype.getControlName = function (c) {
        var formGroup = c.parent.controls;
        return Object.keys(formGroup).find(function (name) { return c === formGroup[name]; }) || null;
    };
    ShowErrorsComponent.errorMessages = {
        'required': function (params) { return '##FIELD## can\'t be blank'; },
        'minlength': function (params) { return '##FIELD## should be minimum ' + params.requiredLength + ' characters'; },
        'maxlength': function (params) { return '##FIELD## should not be greater then ' + params.requiredLength + ' characters'; },
        'pattern': function (params) { return 'Should be a valid'; },
        'email': function (params) { return "Should be vaild email."; },
        'passwordConfirming': function (params) { return "Invalid Password Matching"; },
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShowErrorsComponent.prototype, "control", void 0);
    ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
        core_1.Component({
            selector: 'show-errors',
            template: "\n\n   <lable *ngIf=\"shouldShowErrors()\" class=\"validation-errors\">\n\n     <lable style=\"color: red\">{{getError()}}</lable>\n\n   </lable>\n\n ",
        })
    ], ShowErrorsComponent);
    return ShowErrorsComponent;
    var ShowErrorsComponent_1;
}());
exports.ShowErrorsComponent = ShowErrorsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Vycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3dlcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJCQUEyQjs7QUFFM0Isc0NBQWlEO0FBb0JqRDtJQUFBO0lBeUVBLENBQUM7NEJBekVZLG1CQUFtQjtJQXFCL0IsOENBQWdCLEdBQWhCO1FBRUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBRWpCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUVuQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUVELDBDQUFZLEdBQVo7UUFBQSxpQkFNQztRQUpDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO2FBRXBDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO0lBRW5GLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBRUUsMENBQTBDO1FBRjVDLGlCQVVBO1FBTkUsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzthQUUzQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQS9ELENBQStELENBQUMsQ0FBQztRQUVoRixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBCLENBQUM7SUFFUSx3Q0FBVSxHQUFsQixVQUFtQixJQUFZLEVBQUUsTUFBVyxFQUFDLE9BQVc7UUFFdEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUvRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUE7UUFFcEQsSUFBSSxHQUFHLEdBQUcscUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLENBQWtCO1FBRTdCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUMsSUFBSSxJQUFJLENBQUM7SUFFOUUsQ0FBQztJQXJFdUIsaUNBQWEsR0FBRztRQUV0QyxVQUFVLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSwyQkFBMkIsRUFBM0IsQ0FBMkI7UUFFbkQsV0FBVyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsOEJBQThCLEdBQUMsTUFBTSxDQUFDLGNBQWMsR0FBQyxhQUFhLEVBQWxFLENBQWtFO1FBRTNGLFdBQVcsRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLHVDQUF1QyxHQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUMsYUFBYSxFQUEzRSxDQUEyRTtRQUVwRyxTQUFTLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxtQkFBbUIsRUFBbkIsQ0FBbUI7UUFFMUMsT0FBTyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsd0JBQXdCLEVBQXhCLENBQXdCO1FBQzdDLG9CQUFvQixFQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsMkJBQTJCLEVBQTNCLENBQTJCO0tBRTdELENBQUM7SUFJRjtRQUZDLFlBQUssRUFBRTs7d0RBRW9EO0lBbkJoRCxtQkFBbUI7UUFoQi9CLGdCQUFTLENBQUM7WUFFVixRQUFRLEVBQUUsYUFBYTtZQUV2QixRQUFRLEVBQUUsd0pBUVQ7U0FFRCxDQUFDO09BRVcsbUJBQW1CLENBeUUvQjtJQUFELDBCQUFDOztDQUFBLEFBekVELElBeUVDO0FBekVZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHNob3ctZXJyb3JzLmNvbXBvbmVudC50c1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbERpcmVjdGl2ZSwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcblxuIHNlbGVjdG9yOiAnc2hvdy1lcnJvcnMnLFxuXG4gdGVtcGxhdGU6IGBcblxuICAgPGxhYmxlICpuZ0lmPVwic2hvdWxkU2hvd0Vycm9ycygpXCIgY2xhc3M9XCJ2YWxpZGF0aW9uLWVycm9yc1wiPlxuXG4gICAgIDxsYWJsZSBzdHlsZT1cImNvbG9yOiByZWRcIj57e2dldEVycm9yKCl9fTwvbGFibGU+XG5cbiAgIDwvbGFibGU+XG5cbiBgLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgU2hvd0Vycm9yc0NvbXBvbmVudCB7XG5cbiBwcml2YXRlIHN0YXRpYyByZWFkb25seSBlcnJvck1lc3NhZ2VzID0ge1xuXG4gICAncmVxdWlyZWQnOiAocGFyYW1zKSA9PiAnIyNGSUVMRCMjIGNhblxcJ3QgYmUgYmxhbmsnLFxuXG4gICAnbWlubGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgYmUgbWluaW11bSAnK3BhcmFtcy5yZXF1aXJlZExlbmd0aCsnIGNoYXJhY3RlcnMnLFxuXG4gICAnbWF4bGVuZ3RoJzogKHBhcmFtcykgPT4gJyMjRklFTEQjIyBzaG91bGQgbm90IGJlIGdyZWF0ZXIgdGhlbiAnK3BhcmFtcy5yZXF1aXJlZExlbmd0aCsnIGNoYXJhY3RlcnMnLFxuXG4gICAncGF0dGVybic6IChwYXJhbXMpID0+ICdTaG91bGQgYmUgYSB2YWxpZCcsXG5cbiAgICdlbWFpbCc6IChwYXJhbXMpID0+IFwiU2hvdWxkIGJlIHZhaWxkIGVtYWlsLlwiLFxuICAgJ3Bhc3N3b3JkQ29uZmlybWluZyc6KHBhcmFtcykgPT4gXCJJbnZhbGlkIFBhc3N3b3JkIE1hdGNoaW5nXCIsXG5cbiB9O1xuXG4gQElucHV0KClcblxuIHByaXZhdGUgY29udHJvbDogQWJzdHJhY3RDb250cm9sRGlyZWN0aXZlIHwgQWJzdHJhY3RDb250cm9sO1xuXG4gc2hvdWxkU2hvd0Vycm9ycygpOiBib29sZWFuIHtcblxuICAgcmV0dXJuIHRoaXMuY29udHJvbCAmJlxuXG4gICAgIHRoaXMuY29udHJvbC5lcnJvcnMgJiZcblxuICAgICAodGhpcy5jb250cm9sLmRpcnR5IHx8IHRoaXMuY29udHJvbC50b3VjaGVkKTtcblxuIH1cblxuIGxpc3RPZkVycm9ycygpOiBzdHJpbmdbXSB7XG5cbiAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuZXJyb3JzKVxuXG4gICAgIC5tYXAoZmllbGQgPT4gdGhpcy5nZXRNZXNzYWdlKGZpZWxkLCB0aGlzLmNvbnRyb2wuZXJyb3JzW2ZpZWxkXSx0aGlzLmNvbnRyb2wpKTtcblxuIH1cblxuIGdldEVycm9yKCk6IHN0cmluZyB7XG5cbiAgIC8vY29uc29sZS5sb2coXCJzaG93XCIsdGhpcy5jb250cm9sLmVycm9ycyk7XG5cbiAgIHZhciBlcnJvcnMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRyb2wuZXJyb3JzKVxuXG4gICAgLm1hcChmaWVsZCA9PiB0aGlzLmdldE1lc3NhZ2UoZmllbGQsIHRoaXMuY29udHJvbC5lcnJvcnNbZmllbGRdLHRoaXMuY29udHJvbCkpO1xuXG4gICByZXR1cm4gZXJyb3JzWzBdO1xuXG59XG5cbiBwcml2YXRlIGdldE1lc3NhZ2UodHlwZTogc3RyaW5nLCBwYXJhbXM6IGFueSxjb250cm9sOmFueSkge1xuXG4gICB2YXIgZm5hbWUgPSB0aGlzLmdldENvbnRyb2xOYW1lKGNvbnRyb2wpO1xuXG4gICBmbmFtZSA9IGZuYW1lLnJlcGxhY2UoXCJfXCIsXCIgXCIpLnJlcGxhY2UoXCIgaWRcIixcIlwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICBmbmFtZSA9IGZuYW1lLnJlcGxhY2UoL1xcYlxcdy9nLCBsID0+IGwudG9VcHBlckNhc2UoKSlcblxuICAgdmFyIG1zZyA9IFNob3dFcnJvcnNDb21wb25lbnQuZXJyb3JNZXNzYWdlc1t0eXBlXShwYXJhbXMpO1xuXG4gICByZXR1cm4gbXNnLnJlcGxhY2UoXCIjI0ZJRUxEIyNcIixmbmFtZSk7XG5cbiB9XG5cbiBnZXRDb250cm9sTmFtZShjOiBBYnN0cmFjdENvbnRyb2wpOiBzdHJpbmcgfCBudWxsIHtcblxuICAgICBjb25zdCBmb3JtR3JvdXAgPSBjLnBhcmVudC5jb250cm9scztcblxuICAgICByZXR1cm4gT2JqZWN0LmtleXMoZm9ybUdyb3VwKS5maW5kKG5hbWUgPT4gYyA9PT0gZm9ybUdyb3VwW25hbWVdKSB8fCBudWxsO1xuXG4gfVxuXG59Il19