/* eslint-disable global-require */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'native-base';
import MainScreen from './components/MainScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    paddingLeft: 10,
  },
  sendIcon: {
    paddingRight: 10,
  },
});

const Stack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Feather.font,
        ...Ionicons.font,
        ...MaterialCommunityIcons.font,
        ...SimpleLineIcons.font,
      });
      setIsReady(true);
    };

    loadFonts();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerLeft: () => <Icon style={styles.cameraIcon} type="Feather" name="camera" />,
            headerTitle: 'Instagram',
            headerTitleAlign: 'center',
            headerRight: () => <Icon style={styles.sendIcon} type="Feather" name="send" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
