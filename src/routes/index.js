/**
 * @providesModule Router
 */

import React from 'react';
import {
  Platform,
  Navigator,
} from 'react-native';

import {
  SplashScene,
  HomeScene,
  SearchScene,
  AboutScene,
} from 'scenes';
import Transitions from '../lib/transitions';

const Router = {
  getSplashRoute() {
    return {
      id: 'splash',
      renderScene(navigator) {
        return <SplashScene navigator={navigator} />;
      },
      onDidFocus() {
        // Orientation.lockToPortrait();
      },
    };
  },
  getHomeRoute() {
    return {
      id: 'home',
      renderScene(navigator) {
        return <HomeScene navigator={navigator} />;
      },
      configureScene() {
        return {
          ...Transitions.NONE,
        };
      },
    };
  },
  getSearchRoute() {
    return {
      id: 'search',
      renderScene(navigator) {
        return <SearchScene navigator={navigator} />;
      },
      configureScene() {
        return {
          ...Transitions.NONE,
        };
      },
    };
  },
  getAboutRoute() {
    return {
      id: 'about',
      renderScene(navigator) {
        return <AboutScene navigator={navigator} />;
      },
            configureScene() {
        return {
          ...Transitions.NONE,
        };
      },
    };
  },
};

export default Router;
