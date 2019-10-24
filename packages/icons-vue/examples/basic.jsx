import Vue from 'vue';
import { Home, SettingFilled } from '../src';
import Icon, { Smile, Sync, Loading, Filter } from '../src';

Vue.component(Filter.name, Filter);
const SimpleDemo = {
  render() {
    return (
      <div class="icons-list">
        <Home />
        <SettingFilled />
        <Smile />
        <Sync spin />
        <Smile rotate={180} />
        <Loading />
        <icon-filter />
        <Icon viewBox="0 0 24 24">
          <title>Cool Home</title>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </Icon>
        <Icon viewBox="0 0 24 24"></Icon>
      </div>
    );
  },
};

new Vue({
  el: '#__vue-content>div',
  render() {
    return <SimpleDemo />;
  },
});
