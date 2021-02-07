# react-native-autocomplete

A pure TypeScript autocomplete component for React Native (iOS) (Android - Not working completely).

![Autocomplete Example](https://github.com/abhigupta92/react-native-autocomplete/blob/main/example_ios.gif)

## How to use react-native-autocomplete

### Installation

```shell
$ npm install --save @mad-family-ui/react-native-autocomplete
```

### Example

```javascript
// ...

  return (
    <Autocomplete
        list={[
          {name: 'Apple', value: 'apple'},
          {name: 'Orange', value: 'orange'},
          {name: 'Grape', value: 'grape'},
          {name: 'Banana', value: 'banana'},
        ]}
        labelKey="name"
        valueKey="value"
     />
  );

// ...
```

A complete example for iOS can be found [here](https://github.com/abhigupta92/react-native-autocomplete).

### Props
| Prop | Type | Description |
| :------------ |:---------------:| :-----:|
list<span style="color:red;">*</span> | Array of object | List of objects used as the data for the Autocomplete |
| zIndex | number | the container component will have this zIndex set. Useful when you have multiple Autocomplete in 1 Screen |
| labelKey<span style="color:red;">*</span> | string | The key searched for in the list for showing the text in the autocomplete suggestion list |
| valueKey<span style="color:red;">*</span> | string | The key searched for in the list for finding selected item |
| searchKeys<span style="color:red;">*</span> | Array of strings | This array of keys is used to filter out the suggestions from the list of objects passed
| onSelectItem<span style="color:red;">*</span> | (item: any) => void | When Item is selected, this function is invoked to return the selected item.
| defaultValue | string | If provided, will find the item from list using **valueKey** and set it selected by default
| containerStyle | style | These styles will be applied to the container which surrounds the autocomplete component. |
| listContainerStyle | style | These styles will be applied to the container which surrounds the autocomplete suggestion list component (ScrollView). |
| inputContainerStyle | style | These styles will be applied to the input container which surrounds the input component. |
| inputStyle | style | These styles will be applied to the input component. |
| listItemContainerStyle | style | These styles will be applied to the container which surrounds the suggestion item component. |
| listItemTextStyle | style | These styles will be applied to the suggestion item. |
| customItemRenderer | (item: any, index: number) => React.ReactElement | Custom Item Renderer |
| noResultComponent | React.ReactElement | Custom No Result Component |
| theme | "light"/"dark" | Support for dark and light theme. Useful if creating an app when you are supporting phone theme used |

## Changelog

<u>1.0.0</u>
- Used Flatlist instead of Scrollview for performance improvements.

    
## Contribute
- Android has issues with able to detect clicks with absolute positioning. If you could help solve this issue, please help :)
- Feel free to open issues or do a PR!
