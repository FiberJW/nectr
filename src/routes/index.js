/**
 * @providesModule Router
 */

import React from 'react';

import {
  SplashScene,
  HomeScene,
  AboutScene,
} from 'scenes';

import Transitions from '../lib/transitions';

const Router = {
  getSplashRoute(firebaseIdeasRef) {
    return {
      id: 'splash',
      renderScene(navigator) {
        return <SplashScene firebaseIdeasRef={firebaseIdeasRef} navigator={navigator} />;
      },
      onDidFocus() {
        // Orientation.lockToPortrait();
      },
    };
  },
  getHomeRoute(firebaseIdeasRef) {
    return {
      id: 'home',
      renderScene(navigator) {
        return <HomeScene firebaseIdeasRef={firebaseIdeasRef} navigator={navigator} />;
      },
      configureScene() {
        return {
          ...Transitions.NONE,
        };
      },
    };
  },
  getAboutRoute(firebaseIdeasRef) {
    return {
      id: 'about',
      renderScene(navigator) {
        return <AboutScene navigator={navigator} firebaseIdeasRef={firebaseIdeasRef} />;
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
