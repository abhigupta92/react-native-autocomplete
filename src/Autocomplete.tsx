import React, { useEffect, useState } from "react";
import {
  FlatList,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity as TouchableOpacityAndroid,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import converter from "./converter";
import {
  AutocompleteProps,
  LayoutProps,
  ListStateProps,
  ThemeProps,
} from "./types";

const themeColors: ThemeProps = {
  light: {
    text: "#000000",
    borderBottomColor: "rgba(0, 0, 0, 0.4)",
    listBackgroundColor: "#ffffff",
  },
  dark: {
    text: "#ffffff",
    borderBottomColor: "gray",
    listBackgroundColor: "#121212",
  },
};

const Autocomplete = (props: AutocompleteProps) => {
  const {
    list,
    labelKey,
    valueKey,
    onSelectItem,
    zIndex,
    listContainerStyle,
    inputContainerStyle,
    inputStyle,
    containerStyle,
    containerHeight,
    listItemContainerStyle,
    listItemTextStyle,
    defaultValue,
    searchKeys,
    customItemRenderer,
    noResultComponent,
    theme = "light",
  } = props;

  const colors = themeColors[theme];
  const borderBottomColor = colors.borderBottomColor;
  const textColor = colors.text;
  const listBackgroundColor = colors.listBackgroundColor;
  const optionSearchKeys =
    searchKeys && searchKeys.length > 0 ? searchKeys : [valueKey];

  const [searchValue, setSearchValue] = useState("");
  const [listState, setListState] = useState<ListStateProps>({
    show: false,
    filteredList: [],
  });
  const [layout, setLayout] = useState<undefined | LayoutProps>(undefined);

  useEffect(() => {
    if (list && list.length > 0 && defaultValue && defaultValue.length > 0) {
      const item = list.find((i: any) => i[valueKey] === defaultValue);

      if (item) {
        setSearchValue(item[labelKey]);
      }
    }
    if (list && list.length > 0) {
      setListState({ show: false, filteredList: list });
    }
    // eslint-disable-next-line
  }, [list, defaultValue]);

  const onLayout = (e: LayoutChangeEvent) => {
    setLayout(e.nativeEvent.layout);
  };

  const selectItem = (item: any) => () => {
    setSearchValue(item[labelKey]);
    setListState((ls) => ({ ...ls, show: false }));
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  const getTopPosition = (): number => {
    if (layout) {
      return layout.height;
    }
    return 0;
  };

  const onChangeSearch = (text: string) => {
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
        filteredList: converter.convertFilteredList(
          list,
          optionSearchKeys || [],
          text
        ),
      });
    }
  };

  const itemRenderer = ({ item, index }: any) => {
    return Platform.OS === "android" ? (
      <TouchableOpacityAndroid
        key={index}
        onPress={selectItem(item)}
        style={[styles.listItem, listItemContainerStyle]}
      >
        {customItemRenderer ? (
          customItemRenderer(item, index)
        ) : (
          <Text style={[{ color: textColor }, listItemTextStyle]}>
            {item[labelKey]}
          </Text>
        )}
      </TouchableOpacityAndroid>
    ) : (
      <TouchableOpacity
        key={index}
        onPress={selectItem(item)}
        style={[styles.listItem, listItemContainerStyle]}
      >
        {customItemRenderer ? (
          customItemRenderer(item, index)
        ) : (
          <Text style={[{ color: textColor }, listItemTextStyle]}>
            {item[labelKey]}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  const renderEmpty = () => {
    return noResultComponent ? (
      noResultComponent
    ) : (
      <View>
        <Text style={{ color: textColor }}>No Results</Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        { height: containerHeight },
        { zIndex: zIndex ? zIndex : 1 },
      ]}
    >
      <View
        style={[styles.inputContainer, inputContainerStyle]}
        onLayout={onLayout}
      >
        <TextInput
          value={searchValue}
          onChangeText={onChangeSearch}
          style={[
            styles.input,
            { borderBottomColor, color: textColor },
            inputStyle,
          ]}
        />
      </View>
      {listState.show && (
        <FlatList
          style={[
            styles.listContainer,
            { backgroundColor: listBackgroundColor },
            listContainerStyle,
            { top: getTopPosition() },
          ]}
          data={listState.filteredList}
          renderItem={itemRenderer}
          ListEmptyComponent={renderEmpty}
          keyExtractor={(_item: any, index: number) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { zIndex: 1, width: "100%" },
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
