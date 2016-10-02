/**
 * @providesModule Router
 */

import React from 'react';

import {
  SplashScene,
  HomeScene,
  SearchScene,
  CreateIdeaScene,
  AboutScene,
  IdeaScene,
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
  getSearchRoute(firebaseIdeasRef) {
    return {
      id: 'search',
      renderScene(navigator) {
        return <SearchScene firebaseIdeasRef={firebaseIdeasRef} navigator={navigator} />;
      },
      configureScene() {
        return {
          ...Transitions.NONE,
        };
      },
    };
  },
  getCreateIdeaRoute(firebaseIdeasRef) {
    return {
      id: 'create_idea',
      renderScene(navigator) {
        return <CreateIdeaScene firebaseIdeasRef={firebaseIdeasRef} navigator={navigator} />;
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
  getIdeaRoute(idea) {
    return {
      id: 'idea',
      renderScene(navigator) {
        return <IdeaScene idea={idea} navigator={navigator} />;
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
