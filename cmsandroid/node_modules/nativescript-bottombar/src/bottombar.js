"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var properties_1 = require("tns-core-modules/ui/core/properties");
var TITLE_STATE;
(function (TITLE_STATE) {
    TITLE_STATE[TITLE_STATE["SHOW_WHEN_ACTIVE"] = 0] = "SHOW_WHEN_ACTIVE";
    TITLE_STATE[TITLE_STATE["ALWAYS_SHOW"] = 1] = "ALWAYS_SHOW";
    TITLE_STATE[TITLE_STATE["ALWAYS_HIDE"] = 2] = "ALWAYS_HIDE";
})(TITLE_STATE = exports.TITLE_STATE || (exports.TITLE_STATE = {}));
var BottomBarBase = (function (_super) {
    __extends(BottomBarBase, _super);
    function BottomBarBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selectedIndex = 0;
        return _this;
    }
    Object.defineProperty(BottomBarBase.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (index) {
            if (index !== this._selectedIndex) {
                this._selectedIndex = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    BottomBarBase.prototype.selectItem = function (index) {
        if (index !== this._selectedIndex) {
            this._selectedIndex = index;
            this.selectItemNative(index);
        }
    };
    return BottomBarBase;
}(view_1.View));
exports.BottomBarBase = BottomBarBase;
exports.itemsProperty = new properties_1.Property({
    name: "items",
    equalityComparer: function (a, b) { return !a && !b && a.length === b.length; }
});
exports.itemsProperty.register(BottomBarBase);
exports.titleStateProperty = new properties_1.Property({
    name: "titleState"
});
exports.titleStateProperty.register(BottomBarBase);
exports.hideProperty = new properties_1.Property({
    name: "hide",
    valueConverter: function (value) { return Boolean(value); }
});
exports.hideProperty.register(BottomBarBase);
exports.accentColorProperty = new properties_1.Property({
    name: "accentColor"
});
exports.accentColorProperty.register(BottomBarBase);
exports.inactiveColorProperty = new properties_1.Property({
    name: "inactiveColor"
});
exports.inactiveColorProperty.register(BottomBarBase);
exports.uncoloredBackgroundColorProperty = new properties_1.Property({
    name: "uncoloredBackgroundColor"
});
exports.uncoloredBackgroundColorProperty.register(BottomBarBase);
exports.coloredProperty = new properties_1.Property({
    name: "colored",
    valueConverter: function (value) { return Boolean(value); }
});
exports.coloredProperty.register(BottomBarBase);
