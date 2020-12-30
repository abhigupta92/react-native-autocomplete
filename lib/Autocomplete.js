var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import converter from "./converter";
var themeColors = {
    light: {
        text: "#00000",
        borderBottomColor: "rgba(0, 0, 0, 0.4)",
        listBackgroundColor: "#ffffff",
    },
    dark: {
        text: "#ffffff",
        borderBottomColor: "gray",
        listBackgroundColor: "#121212",
    },
};
var Autocomplete = function (props) {
    var list = props.list, labelKey = props.labelKey, valueKey = props.valueKey, onSelectItem = props.onSelectItem, zIndex = props.zIndex, listContainerStyle = props.listContainerStyle, inputContainerStyle = props.inputContainerStyle, inputStyle = props.inputStyle, containerStyle = props.containerStyle, listItemContainerStyle = props.listItemContainerStyle, listItemTextStyle = props.listItemTextStyle, defaultValue = props.defaultValue, searchKeys = props.searchKeys, customItemRenderer = props.customItemRenderer, _a = props.theme, theme = _a === void 0 ? "light" : _a;
    var colors = themeColors[theme];
    var borderBottomColor = colors.borderBottomColor;
    var textColor = colors.text;
    var listBackgroundColor = colors.listBackgroundColor;
    var _b = useState(""), searchValue = _b[0], setSearchValue = _b[1];
    var _c = useState({
        show: false,
        filteredList: [],
    }), listState = _c[0], setListState = _c[1];
    var _d = useState(undefined), layout = _d[0], setLayout = _d[1];
    useEffect(function () {
        if (list && list.length > 0 && defaultValue && defaultValue.length > 0) {
            var item = list.find(function (i) { return i[valueKey] === defaultValue; });
            if (item) {
                setSearchValue(item[labelKey]);
            }
        }
        if (list && list.length > 0) {
            setListState({ show: false, filteredList: list });
        }
        // eslint-disable-next-line
    }, [list, defaultValue]);
    var onLayout = function (e) {
        setLayout(e.nativeEvent.layout);
    };
    var selectItem = function (item) { return function () {
        setSearchValue(item[labelKey]);
        setListState(function (ls) { return (__assign(__assign({}, ls), { show: false })); });
        if (onSelectItem) {
            onSelectItem(item);
        }
    }; };
    var getTopPosition = function () {
        if (layout) {
            return layout.height;
        }
        return 0;
    };
    var onChangeSearch = function (text) {
        setSearchValue(text);
        if (onSelectItem) {
            onSelectItem(undefined);
        }
        if (text.length === 0) {
            setListState({ show: false, filteredList: list });
        }
        if (text.length > 0) {
            setListState({
                show: true,
                filteredList: converter.convertFilteredList(list, searchKeys || [], text),
            });
        }
    };
    var itemRenderer = function (item, index) { return (React.createElement(TouchableOpacity, { key: index, onPress: selectItem(item), style: [styles.listItem, listItemContainerStyle] }, customItemRenderer ? (customItemRenderer(item)) : (React.createElement(Text, { style: [{ color: textColor }, listItemTextStyle] }, item[labelKey])))); };
    var renderEmpty = function () {
        return (React.createElement(View, null,
            React.createElement(Text, { style: { color: textColor } }, "No Results")));
    };
    return (React.createElement(View, { style: [
            styles.container,
            containerStyle,
            { zIndex: zIndex ? zIndex : 1 },
        ] },
        React.createElement(View, { style: [styles.inputContainer, inputContainerStyle], onLayout: onLayout },
            React.createElement(TextInput, { value: searchValue, onChangeText: onChangeSearch, style: [
                    styles.input,
                    { borderBottomColor: borderBottomColor, color: textColor },
                    inputStyle,
                ] })),
        listState.show && (React.createElement(ScrollView, { style: [
                styles.listContainer,
                { backgroundColor: listBackgroundColor },
                listContainerStyle,
                { top: getTopPosition() },
            ] },
            listState.filteredList.length > 0 &&
                listState.filteredList.map(itemRenderer),
            listState.filteredList.length === 0 && renderEmpty()))));
};
var styles = StyleSheet.create({
    container: { zIndex: 1 },
    inputContainer: { width: "100%" },
    listContainer: {
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        padding: 8,
        zIndex: 10,
    },
    listItem: {
        width: "100%",
        borderBottomColor: "#ebebeb",
        borderBottomWidth: 1,
        padding: 8,
        paddingLeft: 0,
        zIndex: 1,
    },
    input: {
        paddingTop: 4,
        paddingBottom: 4,
        borderBottomWidth: 1,
    },
});
export default Autocomplete;
//# sourceMappingURL=Autocomplete.js.map