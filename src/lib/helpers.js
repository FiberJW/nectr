import Router from '../routes';

export default {
  getRouteById(id) {
    return {
      splash: Router.getSplashRoute,
      home: Router.getHomeRoute,
      search: Router.getSearchRoute,
      about: Router.getAboutRoute,
    }[id];
  },
};
