import { TextInputProps, ViewStyle } from "react-native";
export interface AutocompleteProps extends TextInputProps {
    list: Array<any>;
    zIndex?: number;
    containerStyle?: ViewStyle;
    listContainerStyle?: ViewStyle;
    labelKey: string;
    valueKey: string;
    onSelectItem?: (item?: any) => void;
    searchKeys?: Array<string>;
    defaultValue?: any;
}
export interface LayoutProps {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface ListStateProps {
    show: boolean;
    filteredList: Array<any>;
}
