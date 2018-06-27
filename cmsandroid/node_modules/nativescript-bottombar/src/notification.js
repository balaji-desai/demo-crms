"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Notification = (function () {
    function Notification(textColorValue, backgroundColorValue, valueValue) {
        this._textColor = textColorValue;
        this._backgroundColor = backgroundColorValue;
        this._value = valueValue;
    }
    Object.defineProperty(Notification.prototype, "textColor", {
        get: function () {
            return this._textColor;
        },
        set: function (textColorValue) {
            this._textColor = textColorValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (backgroundColorValue) {
            this._backgroundColor = backgroundColorValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (valueValue) {
            this._value = valueValue;
        },
        enumerable: true,
        configurable: true
    });
    return Notification;
}());
exports.Notification = Notification;
