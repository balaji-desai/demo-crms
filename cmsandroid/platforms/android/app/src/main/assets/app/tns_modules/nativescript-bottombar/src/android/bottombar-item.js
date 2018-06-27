"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var color_1 = require("tns-core-modules/color/color");
var AHNotification = com.aurelhubert.ahbottomnavigation.notification.AHNotification;
var BottomBarItem = (function (_super) {
    __extends(BottomBarItem, _super);
    function BottomBarItem(index, title, icon, color, notification, parent) {
        return _super.call(this, index, title, icon, color, notification, parent) || this;
    }
    Object.defineProperty(BottomBarItem.prototype, "index", {
        get: function () {
            return _super.prototype.getIndex.call(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "title", {
        get: function () {
            return _super.prototype.getTitle.call(this);
        },
        set: function (value) {
            var currentTitle = _super.prototype.getTitle.call(this);
            if (_super.prototype.setTitle.call(this, value)) {
                this.parent.get().changeItemTitle(this.index, this.title);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "icon", {
        get: function () {
            return _super.prototype.getIcon.call(this);
        },
        set: function (value) {
            if (_super.prototype.setIcon.call(this, value)) {
                this.parent.get().changeItemIcon(this.index, this.icon);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottomBarItem.prototype, "color", {
        get: function () {
            return _super.prototype.getColor.call(this);
        },
        set: function (value) {
            if (_super.prototype.setColor.call(this, value)) {
                this.parent.get().changeItemColor(this.index, this.color);
            }
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
                if (this.notification.value !== "") {
                    var newNotification = new AHNotification.Builder()
                        .setText(this.notification.value)
                        .setBackgroundColor(new color_1.Color(this.notification.backgroundColor).android)
                        .setTextColor(new color_1.Color(this.notification.textColor).android)
                        .build();
                    this.parent.get().android.setNotification(newNotification, this.index);
                }
                else {
                    this.parent.get().android.setNotification("", this.index);
                }
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
