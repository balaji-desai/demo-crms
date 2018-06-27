/**
 * TextInputLayout Class
 *      Acts as a wrapper around <TextField> or <TextView> components
 *      Implements functionality outline in android's TextInputLayout component
 */

import { Color } from "tns-core-modules/color";
import { View, Property } from "tns-core-modules/ui/core/view";

export class TextInputLayout extends View {
    /**
     * Native [android TextInputLayout](http://developer.android.com/reference/android/support/design/widget/TextInputLayout.html)
     */
    android: any;

    ios: any;

    public hint: string;
    public error: string;

    //ANDROID ONLY
    public hintAnimationEnabled?: boolean;
    public hintTextAppearance?: string;
    public counterEnabled?: boolean;
    public errorEnabled?: boolean;

    //IOS Only
    public title?: string;
    public tintColor?: Color;
    public lineColor?: Color;
    public selectedTintColor?: Color;
    public selectedLineColor?: Color;
    public selectedTitleColor?: Color;
    public lineHeight?: number;
    public selectedLineHeight?: number;
    public errorColor?: Color;
    public iconColor?: Color;
    public selectedIconColor?: Color;
    public iconFont?: string;
    public iconText?: string;
    public iconMarginBottom?: number;
    public iconMarginLeft?: number;
    public iconRotationDegrees?: number;
}

export const errorProperty: Property<TextInputLayout, string>;
export const hintProperty: Property<TextInputLayout, string>;
export const hintAnimationEnabledProperty: Property<TextInputLayout, boolean>;
export const hintTextAppearanceProperty: Property<TextInputLayout, string>;
export const counterEnabledProperty: Property<TextInputLayout, boolean>;
export const errorEnabledProperty: Property<TextInputLayout, boolean>;
export const titleProperty: Property<TextInputLayout, string>;
export const tintColorProperty: Property<TextInputLayout, Color>;
export const lineColorProperty: Property<TextInputLayout, Color>;
export const selectedTitleColorProperty: Property<TextInputLayout, Color>;
export const selectedLineColorProperty: Property<TextInputLayout, Color>;
export const lineHeightProperty: Property<TextInputLayout, number>;
export const selectedLineHeightProperty: Property<TextInputLayout, number>;
export const errorColorProperty: Property<TextInputLayout, Color>;
export const iconColorProperty: Property<TextInputLayout, Color>;
export const selectedIconColorProperty: Property<TextInputLayout, Color>;
export const iconFontProperty: Property<TextInputLayout, UIFont>;
export const iconTextProperty: Property<TextInputLayout, string>;
export const iconMarginBottomProperty: Property<TextInputLayout, number>;
export const iconMarginLeftProperty: Property<TextInputLayout, number>;
export const iconRotationDegreesProperty: Property<TextInputLayout, number>;