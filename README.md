**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
# react-native-autocomplete

A pure TypeScript autocomplete component for React Native.

![Autocomplete Example](https://raw.githubusercontent.com/mrlaessig/react-native-autocomplete-input/master/example.gif)

## How to use react-native-autocomplete-input

Tested with RN >= 0.26.2. If you want to use RN < 0.26 try to install react-native-autocomplete-input <= 0.0.5.

### Installation

```shell
$ npm install --save react-native-autocomplete-input
```

or install HEAD from github.com:

```shell
$ npm install --save mrlaessig/react-native-autocomplete-input
```

### Example

```javascript
// ...

render() {
  const { query } = this.state;
  const data = this._filterData(query);
  return (
    <Autocomplete
      data={data}
      defaultValue={query}
      onChangeText={text => this.setState({ query: text })}
      renderItem={({ item, i }) => (
        <TouchableOpacity onPress={() => this.setState({ query: item })}>
          <Text>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

// ...
```

A complete example for Android and iOS can be found [here](//github.com/mrlaessig/react-native-autocomplete-input/blob/master/example/).

### Android

Android does not support overflows ([#20](https://github.com/mrlaessig/react-native-autocomplete-input/issues/20)), for that reason it is necessary to wrap the autocomplete into a _absolute_ positioned view on Android. This will allow the suggestion list to overlap other views inside your component.

```javascript
//...

render() {
  return(
    <View>
      <View style={styles.autocompleteContainer}>
        <Autocomplete {/* your props */} />
      </View>
      <View>
        <Text>Some content</Text>
      </View>
    </View>
  );
}

//...

const styles = StyleSheet.create({
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  }
});

```

### Props

| Prop                             |   Type   | Description                                                                                                                                                                                                                      |
| :------------------------------- | :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| containerStyle                   |  style   | These styles will be applied to the container which surrounds the autocomplete component.                                                                                                                                        |
| hideResults                      |   bool   | Set to `true` to hide the suggestion list.                                                                                                                                                                                       |
| data                             |  array   | An array with suggestion items to be rendered in `renderItem({ item, i })`. Any array with length > 0 will open the suggestion list and any array with length < 1 will hide the list.                                            |
| inputContainerStyle              |  style   | These styles will be applied to the container which surrounds the textInput component.                                                                                                                                           |
| listContainerStyle               |  style   | These styles will be applied to the container which surrounds the result list.                                                                                                                                                   |
| listStyle                        |  style   | These style will be applied to the result list.                                                                                                                                                                                  |
| onShowResult                     | function | `onShowResult` will be called when the autocomplete suggestions appear or disappear.                                                                                                                                             |
| onStartShouldSetResponderCapture | function | `onStartShouldSetResponderCapture` will be passed to the result list view container ([onStartShouldSetResponderCapture](https://facebook.github.io/react-native/docs/gesture-responder-system.html#capture-shouldset-handlers)). |
| renderItem                       | function | `renderItem` will be called to render the data objects which will be displayed in the result view below the text input.                                                                                                          |
| keyExtractor                     | function | `keyExtractor(item, i)` will be called to get key for each item. It's up to you which string to return as a key.                                                                                                                 |
| renderSeparator                  | function | `renderSeparator` will be called to render the list separators which will be displayed between the list elements in the result view below the text input.                                                                        |
| renderTextInput                  | function | render custom TextInput. All props passed to this function.                                                                                                                                                                      |
| flatListProps                    |  object  | custom props to FlatList[](https://facebook.github.io/react-native/docs/flatlist.html)].                                                                                                                                         |

## Known issues

- By default the autocomplete will not behave as expected inside a `<ScrollView />`. Set the scroll view's prop to fix this: `keyboardShouldPersistTaps={true}` for RN <= 0.39, or `keyboardShouldPersistTaps='always'` for RN >= 0.40. ([#5](https://github.com/mrlaessig/react-native-autocomplete-input/issues/5)).
- If you want to test with Jest add `jest.mock('react-native-autocomplete-input', () => 'Autocomplete');` to your test.

## Contribute

Feel free to open issues or do a PR!
