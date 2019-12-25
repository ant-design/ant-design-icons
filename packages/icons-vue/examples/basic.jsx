import Vue from 'vue';
import { SmileOutlined, SyncOutlined, LoadingOutlined, HomeOutlined, SettingFilled } from '../src';
import Icon, { FilterOutlined } from '../src';
import { AntDesignOutlined } from '@ant-design/icons-svg';
import IconBase from '../src/components/IconBase';

Vue.component(FilterOutlined.name, FilterOutlined);
const SimpleDemo = {
  render() {
    return (
      <div class="icons-list">
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
        <icon-filter-outlined />
        <Icon viewBox="0 0 24 24">
          <title>Cool Home</title>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </Icon>
        <Icon viewBox="0 0 24 24"></Icon>
        <IconBase icon={AntDesignOutlined} />
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
