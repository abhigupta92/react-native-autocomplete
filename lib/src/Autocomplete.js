import { __assign } from "tslib";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import converter from "./converter";
var Autocomplete = function (props) {
    var list = props.list, labelKey = props.labelKey, valueKey = props.valueKey, onSelectItem = props.onSelectItem, zIndex = props.zIndex, listContainerStyle = props.listContainerStyle, containerStyle = props.containerStyle, defaultValue = props.defaultValue, searchKeys = props.searchKeys;
    var _a = useState(""), searchValue = _a[0], setSearchValue = _a[1];
    var _b = useState({
        show: false,
        filteredList: [],
    }), listState = _b[0], setListState = _b[1];
    var _c = useState(undefined), layout = _c[0], setLayout = _c[1];
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
    var itemRenderer = function (item, index) { return (<TouchableOpacity key={index} onPress={selectItem(item)} style={styles.listItem}>
      <Text>{item[labelKey]}</Text>
    </TouchableOpacity>); };
    var renderEmpty = function () {
        return (<View>
        <Text>No Results</Text>
      </View>);
    };
    return (<View style={[
        styles.container,
        containerStyle,
        { zIndex: zIndex ? zIndex : 1 },
    ]}>
      <View style={styles.inputContainer} onLayout={onLayout}>
        <TextInput value={searchValue} onChangeText={onChangeSearch} style={styles.input}/>
      </View>
      {listState.show && (<ScrollView style={[
        styles.listContainer,
        listContainerStyle,
        { top: getTopPosition() },
    ]}>
          {listState.filteredList.length > 0 &&
        listState.filteredList.map(itemRenderer)}
          {listState.filteredList.length === 0 && renderEmpty()}
        </ScrollView>)}
    </View>);
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
        borderBottomColor: "rgba(0, 0, 0, 0.4)",
        borderBottomWidth: 1,
    },
});
export default Autocomplete;
//# sourceMappingURL=Autocomplete.js.map