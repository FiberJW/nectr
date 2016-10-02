/**
 * @providesModule Router
 */

import React from 'react';

import {
  SplashScene,
  HomeScene,
  SearchScene,
  CreateIdeaScene,
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
  getCreateIdeaRoute() {
    return {
      id: 'create_idea',
      renderScene(navigator) {
        return <CreateIdeaScene navigator={navigator} />
      }
    }
  },
};

export default Router;
