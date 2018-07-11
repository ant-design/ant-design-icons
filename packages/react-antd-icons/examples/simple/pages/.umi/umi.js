import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'umi/_createHistory';
import FastClick from 'umi-fastclick';


document.addEventListener(
  'DOMContentLoaded',
  () => {
    FastClick.attach(document.body);
  },
  false,
);

// create history
window.g_history = createHistory({
  basename: window.routerBase,
});


// render
function render() {
  ReactDOM.render(React.createElement(require('./router').default), document.getElementById('root'));
}
render();

// hot module replacement
if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}

// Enable service worker
if (process.env.NODE_ENV === 'production') {
  require('./registerServiceWorker');
}
      