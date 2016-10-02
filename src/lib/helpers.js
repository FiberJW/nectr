import Router from '../routes';

export default {
  getRouteById(id) {
    return {
      splash: Router.getSplashRoute,
      home: Router.getHomeRoute,
      about: Router.getAboutRoute,
    }[id];
  },
};
