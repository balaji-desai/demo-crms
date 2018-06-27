"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var color_1 = require("tns-core-modules/color");
var image_source_1 = require("tns-core-modules/image-source");
var BottomBarDelegate = (function (_super) {
    __extends(BottomBarDelegate, _super);
    function BottomBarDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottomBarDelegate.initWithOwner = function (owner) {
        var delegate = BottomBarDelegate.new();
        delegate._owner = owner;
        return delegate;
    };
    BottomBarDelegate.prototype.tabSelected = function (index) {
        var bar = this._owner.get();
        bar.tabSelected(index);
    };
    return BottomBarDelegate;
}(NSObject));
BottomBarDelegate.ObjCProtocols = [MiniTabBarDelegate];
exports.BottomBarDelegate = BottomBarDelegate;
var BottomBar = (function (_super) {
    __extends(BottomBar, _super);
    function BottomBar() {
        var _this = _super.call(this) || this;
        var items = new Array();
        _this.nativeView = new MiniTabBar({
            items: items,
            titleState: 0
        });
        _this.selectedIndex = 0;
        _this._delegate = BottomBarDelegate.initWithOwner(new WeakRef(_this));
        _this.nativeView.frame = CGRectMake(0, 400, 400, 44);
        _this.nativeView.tintColor = new color_1.Color("red").ios;
        _this.nativeView.font = UIFont.systemFontOfSize(10);
        _this.nativeView.backgroundColor = new color_1.Color('black').ios;
        _this.nativeView.backgroundBlurEnabled = false;
        _this.nativeView.keyLine.isHidden = true;
        return _this;
    }
    Object.defineProperty(BottomBar.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    BottomBar.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this.nativeView.delegate = this._delegate;
    };
    BottomBar.prototype.onUnloaded = function () {
        this.nativeView.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    BottomBar.prototype.disposeNativeView = function () {
        this._delegate = null;
    };
    BottomBar.prototype[common_1.itemsProperty.setNative] = function (value) {
        var items = value;
        this.createItems(items);
    };
    BottomBar.prototype.createItems = function (items) {
        var _this = this;
        var itemsMiniTabBar = new Array();
        items.forEach(function (item) {
            var notif = item.notification;
            if (!notif) {
                notif = new common_1.Notification("white", "red", "");
            }
            item.parent = new WeakRef(_this);
            var imageSourceValue = image_source_1.fromResource(item.icon);
            var item1 = new MiniTabBarItem({
                title: item.title,
                icon: imageSourceValue.ios,
                badge: new MiniTabBarBadge(new color_1.Color(notif.backgroundColor).ios, new color_1.Color(notif.textColor).ios, notif.value),
                color: new color_1.Color(item.color).ios
            });
            itemsMiniTabBar.push(item1);
        });
        this.nativeView.setItems(itemsMiniTabBar);
    };
    BottomBar.prototype[common_1.hideProperty.setNative] = function (hide) {
        if (hide) {
            this.nativeView.hide();
        }
        else {
            this.nativeView.show();
        }
    };
    BottomBar.prototype[common_1.titleStateProperty.setNative] = function (titleState) {
        this.nativeView.titleState = titleState;
    };
    BottomBar.prototype[common_1.accentColorProperty.setNative] = function (accentColor) {
        this.nativeView.tintColor = new color_1.Color(accentColor).ios;
    };
    BottomBar.prototype[common_1.inactiveColorProperty.setNative] = function (inactiveColor) {
        this.nativeView.inactiveColor = new color_1.Color(inactiveColor).ios;
    };
    BottomBar.prototype[common_1.uncoloredBackgroundColorProperty.setNative] = function (uncoloredBackgroundColor) {
        this.nativeView.uncoloredBackgroundColor = new color_1.Color(uncoloredBackgroundColor).ios;
    };
    BottomBar.prototype[common_1.coloredProperty.setNative] = function (colored) {
        this.nativeView.colored = colored;
    };
    BottomBar.prototype.setNotification = function (value, index) {
        this.nativeView.changeBadgeItem(index, value);
    };
    BottomBar.prototype.setBadge = function (badgeIndex, badgeValue) {
        this.nativeView.changeBadgeItem(badgeIndex, badgeValue);
    };
    BottomBar.prototype.tabSelected = function (index) {
        var eventData = {
            eventName: "tabSelected",
            object: this,
            oldIndex: this.selectedIndex,
            newIndex: index
        };
        this.selectedIndex = index;
        this.notify(eventData);
    };
    BottomBar.prototype.selectItemNative = function (index) {
        this.nativeView.selectItemAnimated(index, true);
    };
    BottomBar.prototype.createCustomView = function () {
    };
    return BottomBar;
}(common_1.BottomBarBase));
exports.BottomBar = BottomBar;
