import React from 'react';
import {StyleSheet, View} from 'react-native';
import StoryPoints from './src/components/containers/StoryPoints';
import store from './src/redux/store';
import { Provider } from 'react-redux';


export default function App() {
  return (
      <Provider store={store}>
        <View style={styles.container}>
          <StoryPoints />
        </View>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
