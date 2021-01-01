/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Autocomplete from '@sysbrew-ui/react-native-autocomplete';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const customItemRenderer = (item: any) => {
    return (
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View style={{flex: 1}}>
          <Image source={item.icon} style={{height: 20, width: 20}} />
        </View>
        <View style={{flex: 9}}>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <View
        style={{
          width: '100%',
          height: '100%',
          padding: 12,
          flexDirection: 'column',
        }}>
        <View>
          <Text>Default</Text>
        </View>
        <View style={{width: '100%', zIndex: 2}}>
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
        </View>
        <View style={{marginTop: 20}}>
          <Text>Custom</Text>
        </View>
        <View style={{width: '100%'}}>
          <Autocomplete
            list={[
              {
                name: 'Apple',
                value: 'apple',
                icon: require('./assets/apple.jpeg'),
              },
              {
                name: 'Orange',
                value: 'orange',
                icon: require('./assets/orange.jpg'),
              },
              {
                name: 'Grape',
                value: 'grape',
                icon: require('./assets/grape.jpg'),
              },
              {
                name: 'Banana',
                value: 'banana',
                icon: require('./assets/banana.png'),
              },
            ]}
            labelKey="name"
            valueKey="value"
            customItemRenderer={customItemRenderer}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
