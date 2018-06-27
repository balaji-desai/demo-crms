"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var BottomBarItem = (function (_super) {
    __extends(BottomBarItem, _super);
    function BottomBarItem(index, title, icon, color, notification, parent) {
        return _super.call(this, index, title, icon, color, notification, parent) || this;
    }
    Object.defineProperty(BottomBarItem.prototype, "index", {
        get: function () {
            return _super.prototype.getIndex.call(this);
        },
        set: function (indexValue) {
            _super.prototype.setIndex.call(this, indexValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "title", {
        get: function () {
            return _super.prototype.getTitle.call(this);
        },
        set: function (value) {
            _super.prototype.setTitle.call(this, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "icon", {
        get: function () {
            return _super.prototype.getIcon.call(this);
        },
        set: function (value) {
            _super.prototype.setIcon.call(this, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "color", {
        get: function () {
            return _super.prototype.getColor.call(this);
        },
        set: function (value) {
            _super.prototype.setColor.call(this, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "notification", {
        get: function () {
            return _super.prototype.getNotification.call(this);
        },
        set: function (value) {
            if (_super.prototype.setNotification.call(this, value)) {
                this.parent.get().ios.changeBadgeItem(this.index, this.notification.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "parent", {
        set: function (parent) {
            _super.prototype.setParent.call(this, parent);
        },
        enumerable: true,
        configurable: true
    });
    return BottomBarItem;
}(common_1.BottomBarItemBase));
exports.BottomBarItem = BottomBarItem;
