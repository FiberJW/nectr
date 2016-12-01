/**
 * @providesModule Router
 */

import React from 'react';
import HomeScene from '../scenes/HomeScene';
import Transitions from '../lib/transitions';

const Router = {
  getHomeRoute(firebaseIdeasRef, data) {
    return {
      id: 'home',
      renderScene(navigator) {
        return (
          <HomeScene
            initialData={ data }
            firebaseIdeasRef={ firebaseIdeasRef }
            navigator={ navigator }
          />
        );
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
