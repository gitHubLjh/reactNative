import React, { Component } from 'react';
import { Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import Main_Page from './container/main_page'
//application
export default class Application extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ component: Main_Page }} //
                configureScene={(route, routeStack) => {  // 配置场景跳转方向
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => { //  渲染组件
                    // 将导航实例、route的属性传递给Main_Page组件
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
                style={{flex:1}}
            />
        );
    }
}