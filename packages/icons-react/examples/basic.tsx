import * as React from 'react';
import {
  AntDesignOutlined, DashboardOutlined, SmileOutlined,
  SyncOutlined, TwitterOutlined, LoadingOutlined,
  HomeOutlined, SettingFilled,
} from '../src';

const Basic = () => (
  <div>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SyncOutlined spin ccw/>
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
    <LoadingOutlined ccw/>
    <AntDesignOutlined onMouseDown={() => console.log('mouse down')} />
    <DashboardOutlined onKeyUp={() => console.log('key up')} />
    <TwitterOutlined onClick={() => console.log('click')} />
  </div>
);

export default Basic;
