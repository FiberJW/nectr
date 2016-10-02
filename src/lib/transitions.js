
import {
  Navigator,
} from 'react-native';

import buildStyleInterpolator from '@exponent/react-native-navigator/vendor/buildStyleInterpolator.js';

var NoTransition = {
  opacity: {
    value: 1.0,
    type: 'constant',
  },
};

const Transitions = {
    NONE: {
      ...Navigator.SceneConfigs.FadeAndroid,
      gestures: null,
      defaultTransitionVelocity: 0,
      animationInterpolators: {
        into: buildStyleInterpolator(NoTransition),
        out: buildStyleInterpolator(NoTransition)
      }
    }
};

export default Transitions;
