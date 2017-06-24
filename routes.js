/* eslint react/prop-types: 0
 */
import React from 'react';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import {
  Platform,
  View,
  Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './containers/HomeScreen';
import MapScreen from './containers/MapScreen';
import MapPostScreen from './containers/MapPostScreen';
import HomePostDetailScreen from './containers/HomePostDetailScreen';
import ProfileScreen from './containers/ProfileScreen';
import { palette } from './styles';

const TabBarIcon = props =>
<View>
  <Ionicons
    name={props.focused ? props.focusedName : props.unfocusedName}
    size={26}
    style={{ color: props.tintColor }}
  />
  <View style={{ position: 'absolute', left: 12, top: 0, backgroundColor: 'red', borderRadius: 9, width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ color: 'white' }}>1</Text>
  </View>
</View>

TabBarIcon.propTypes = {
  focused: React.PropTypes.bool.isRequired,
  focusedName: React.PropTypes.string.isRequired,
  unfocusedName: React.PropTypes.string.isRequired,
  tintColor: React.PropTypes.string.isRequired,
};

const MainTab = StackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: {
      title: 'Welcome',
    },
  },
  Profile: {
    screen: ProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`,
    }),
  },
});

// this needed to be a data structure, not an object:
export const TabNav = {
  Root: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (<TabBarIcon
        focused={focused}
        tintColor={tintColor}
        focusedName="ios-home"
        unfocusedName="ios-home-outline"
      />),
    },
  },
  MapTab: {
    screen: MapScreen,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor, focused }) => (<TabBarIcon
        focused={focused}
        tintColor={tintColor}
        focusedName="ios-settings"
        unfocusedName="ios-settings-outline"
      />),
    },
  },
};
/*
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? palette.RICH_NAVY : '#fff',
  },
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});
*/


export const StacksOverTabs = {
  Root: {
    screen: TabNav,
  },
  MapPost: {
    screen: MapPostScreen,
    navigationOptions: {
      title: 'Notification Settings',
    },
  },
  PostDetail: {
    screen: HomePostDetailScreen,
  },
};
