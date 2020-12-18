import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Facebook from './screens/fb';
import Instagram from './screens/in';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <AppContainer/>
            </View>
        );
    }
}

var AppNavigator = createSwitchNavigator({
    Facebook: Facebook,
    Instagram: Instagram,
});

const AppContainer = createAppContainer(AppNavigator);

const TabNavigator = createBottomTabNavigator({
    FB: { screen: Facebook },
    IN: { screen: Instagram }
});

const appContainer = createAppContainer(TabNavigator);