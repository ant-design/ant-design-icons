module.exports =  {
  routes: {
    path: '/',
    component: './template/Layout'
  },
  lazyLoad(nodePath, nodeValue) {
    return true;
  }
};
