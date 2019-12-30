import * as React from 'react';
import { SmileOutlined, SyncOutlined, LoadingOutlined, HomeOutlined, SettingFilled } from '../src';

const Basic = () => (
  <div>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </div>
);

export default Basic;
