/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import Application from './src/application'
// 组件注册后才能render出，只需要把应用整体组册一次，不需要每个组件都注册
AppRegistry.registerComponent('rn_weather', () => Application);
