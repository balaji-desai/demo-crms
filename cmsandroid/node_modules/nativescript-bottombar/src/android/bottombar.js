"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var bottombar_item_1 = require("./bottombar-item");
var color_1 = require("tns-core-modules/color");
var image_source_1 = require("tns-core-modules/image-source");
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var AHBottomNavigation = com.aurelhubert.ahbottomnavigation.AHBottomNavigation;
var AHBottomNavigationItem = com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;
var AHNotification = com.aurelhubert.ahbottomnavigation.notification.AHNotification;
var BottomBar = (function (_super) {
    __extends(BottomBar, _super);
    function BottomBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BottomBar.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    BottomBar.prototype.createNativeView = function () {
        var nativeView = new AHBottomNavigation(this._context);
        var that = new WeakRef(this);
        this.selectedIndex = 0;
        nativeView.setOnTabSelectedListener(new AHBottomNavigation.OnTabSelectedListener({
            get owner() {
                return that.get();
            },
            onTabSelected: function (position, wasSelected) {
                if (this.owner && !wasSelected) {
                    var eventData = {
                        eventName: "tabSelected",
                        object: this,
                        oldIndex: this.owner.selectedIndex,
                        newIndex: position
                    };
                    this.owner.selectedIndex = position;
                    this.owner.notify(eventData);
                }
                return true;
            }
        }));
        nativeView.setDefaultBackgroundColor(new color_1.Color('#333').android);
        nativeView.setColored(true);
        return nativeView;
    };
    BottomBar.prototype[common_1.itemsProperty.setNative] = function (value) {
        var items = value;
        this.createItems(items);
    };
    BottomBar.prototype[common_1.titleStateProperty.setNative] = function (titleState) {
        switch (titleState) {
            case 1:
                this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_SHOW);
                break;
            case 0:
                this.nativeView.setTitleState(AHBottomNavigation.TitleState.SHOW_WHEN_ACTIVE);
                break;
            case 2:
                this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_HIDE);
                break;
        }
    };
    BottomBar.prototype[common_1.hideProperty.setNative] = function (hide) {
        if (hide) {
            this.nativeView.hideBottomNavigation();
        }
        else {
            this.nativeView.restoreBottomNavigation();
        }
    };
    BottomBar.prototype[common_1.accentColorProperty.setNative] = function (accentColor) {
        this.nativeView.setAccentColor(new color_1.Color(accentColor).android);
    };
    BottomBar.prototype[common_1.inactiveColorProperty.setNative] = function (inactiveColor) {
        this.nativeView.setInactiveColor(new color_1.Color(inactiveColor).android);
    };
    BottomBar.prototype[common_1.coloredProperty.setNative] = function (colored) {
        this.nativeView.setColored(colored);
    };
    BottomBar.prototype[common_1.uncoloredBackgroundColorProperty.setNative] = function (uncoloredBackgroundColor) {
        this.nativeView.setDefaultBackgroundColor(new color_1.Color(uncoloredBackgroundColor).android);
    };
    BottomBar.prototype.changeItemTitle = function (index, title) {
        var item = this.items[index];
        if (item.title !== title) {
            this.items[index] = item;
        }
        this.createItems(this.items);
    };
    BottomBar.prototype.changeItemIcon = function (index, icon) {
        var item = this.items[index];
        if (item.icon !== icon) {
            this.items[index] = item;
        }
        this.createItems(this.items);
    };
    BottomBar.prototype.changeItemColor = function (index, color) {
        var item = this.items[index];
        if (item.color !== color) {
            this.items[index] = item;
        }
        this.createItems(this.items);
    };
    BottomBar.prototype.selectItemNative = function (index) {
        this.nativeView.setCurrentItem(this.selectedIndex);
    };
    BottomBar.prototype.createItems = function (items) {
        var _this = this;
        this.nativeView.removeAllItems();
        items.forEach(function (item, idx, aar) {
            var notif = item.notification;
            if (!notif) {
                notif = new common_1.Notification("white", "red", "");
            }
            _this.items[idx] = new bottombar_item_1.BottomBarItem(item.index, item.title, item.icon, item.color, notif, new WeakRef(_this));
            var icon1 = new BitmapDrawable(image_source_1.fromResource(item.icon).android);
            var item1 = new AHBottomNavigationItem(item.title, icon1, new color_1.Color(item.color).android);
            _this.nativeView.addItem(item1);
            var newNotification = new AHNotification.Builder()
                .setText(notif.value)
                .setBackgroundColor(new color_1.Color(notif.backgroundColor).android)
                .setTextColor(new color_1.Color(notif.textColor).android)
                .build();
            _this.nativeView.setNotification(newNotification, idx);
        });
        this.nativeView.setCurrentItem(this.selectedIndex);
    };
    BottomBar.prototype.setNotification = function (value, index) {
        this.nativeView.setNotification(value, index);
    };
    return BottomBar;
}(common_1.BottomBarBase));
exports.BottomBar = BottomBar;
