"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BottomBarItemBase = (function () {
    function BottomBarItemBase(index, title, icon, color, notification, parent) {
        this._index = index;
        this._title = title;
        this._icon = icon;
        this._color = color;
        if (notification) {
            this._notification = notification;
        }
        if (parent) {
            this._parent = parent;
        }
    }
    BottomBarItemBase.prototype.getIndex = function () {
        return this._index;
    };
    BottomBarItemBase.prototype.setIndex = function (newIndex) {
        if (this._index !== newIndex) {
            this._index = newIndex;
            return true;
        }
    };
    BottomBarItemBase.prototype.setTitle = function (newTitle) {
        if (this._title !== newTitle) {
            this._title = newTitle;
            return true;
        }
    };
    BottomBarItemBase.prototype.getTitle = function () {
        return this._title;
    };
    BottomBarItemBase.prototype.getIcon = function () {
        return this._icon;
    };
    BottomBarItemBase.prototype.setIcon = function (newIcon) {
        if (this._icon !== newIcon) {
            this._icon = newIcon;
            return true;
        }
    };
    BottomBarItemBase.prototype.getColor = function () {
        return this._color;
    };
    BottomBarItemBase.prototype.setColor = function (newColor) {
        if (this._color !== newColor) {
            this._color = newColor;
            return true;
        }
    };
    BottomBarItemBase.prototype.getNotification = function () {
        return this._notification;
    };
    BottomBarItemBase.prototype.setNotification = function (newNotification) {
        if (this._notification !== newNotification) {
            this._notification = newNotification;
            return true;
        }
    };
    BottomBarItemBase.prototype.getParent = function () {
        return this._parent;
    };
    BottomBarItemBase.prototype.setParent = function (newParent) {
        if (this._parent !== newParent) {
            this._parent = newParent;
            return true;
        }
    };
    return BottomBarItemBase;
}());
exports.BottomBarItemBase = BottomBarItemBase;
