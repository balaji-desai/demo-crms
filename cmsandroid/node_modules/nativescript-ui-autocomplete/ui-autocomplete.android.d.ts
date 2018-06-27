import { ObservableArray } from "tns-core-modules/data/observable-array";
import commonModule = require("./ui-autocomplete.common");
export declare namespace knownTemplates {
    const suggestionItemTemplate = "suggestionItemTemplate";
}
export declare class TokenModel extends commonModule.TokenModel {
    private _android;
    constructor(text: string, imageName: any);
    readonly android: com.telerik.widget.autocomplete.TokenModel;
}
export declare class SuggestionView extends commonModule.SuggestionView {
    private _android;
    constructor(parent: RadAutoCompleteTextView);
    android: androidsupportv7widgetRecyclerView;
}
export declare class RadAutoCompleteTextView extends commonModule.RadAutoCompleteTextView {
    _android: com.telerik.widget.autocomplete.RadAutoCompleteTextView;
    filteredItems: Array<TokenModel>;
    private _rootLayout;
    private _androidViewId;
    asyncCall: any;
    constructor();
    createNativeView(): any;
    initNativeView(): void;
    readonly _nativeView: any;
    resetAutocomplete(): void;
    addToken(token: TokenModel): void;
    insertTokenAtIndex(token: TokenModel, index: number): void;
    removeToken(token: TokenModel): void;
    removeTokenAtIndex(index: number): void;
    removeAllTokens(): void;
    tokens(): javautilList<javalangObject>;
    tokenAtIndex(index: number): com.telerik.widget.autocomplete.TokenView;
    protected onDisplayModeChanged(oldValue: string, newValue: string): void;
    protected onLayoutModeChanged(oldValue: string, newValue: string): void;
    protected onSuggestModeChanged(oldValue: string, newValue: string): void;
    protected onCompletionModeChanged(oldValue: string, newValue: string): void;
    protected onItemsChanged(oldValue: ObservableArray<TokenModel>, newValue: ObservableArray<TokenModel>): void;
    protected onSuggestionViewChanged(oldValue: SuggestionView, newValue: SuggestionView): void;
    protected onHintChanged(oldValue: string, newValue: string): void;
    protected onTextChanged(oldValue: string, newValue: string): void;
    protected onMinimumCharactersToSearchChanged(oldValue: number, newValue: number): void;
    protected onLoadSuggestionsAsyncChanged(oldValue: any, newValue: any): void;
    protected onShowCloseButtonChanged(oldValue: boolean, newValue: boolean): void;
    protected onCloseButtonImageSrcChanged(oldValue: string, newValue: string): void;
    protected onReadOnlyChanged(oldValue: boolean, newValue: boolean): void;
    private adjustAsyncCall(value);
    private adjustHint(value);
    private adjustText(value);
    private adjustMinimumCharactersToSearch(value);
    private adjustSuggestionView(value);
    private adjustCompletionMode(value);
    private adjustDisplayMode(value);
    private adjustSuggestMode(value);
    private adjustLayoutMode(value);
    private adjustShowCloseButton(value);
    private adjustCloseButtonImage(value);
    private loadData(isRemote);
    static resolveDrawableFromResource(imageName: any): any;
}
