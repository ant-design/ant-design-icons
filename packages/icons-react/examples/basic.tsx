import * as React from 'react';
import { SmileOutlined, SyncOutlined, LoadingOutlined, HomeOutlined, SettingFilled } from '../src';

export default class Basic extends React.Component<{}> {
  render() {
    return (
      <div>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </div>
    );
  }
}
