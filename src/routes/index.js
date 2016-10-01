/**
 * @providesModule Router
 */

import React from 'react';

import {
  SplashScene,
  HomeScene,
} from 'scenes';

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
        return <HomeScene navigator={navigator} />
      }
    }
  }
};

export default Router;
