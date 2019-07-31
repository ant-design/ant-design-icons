import * as React from 'react';
import { Home, SettingFilled } from '../src';
import { Smile, Sync, Loading } from '../src';

export default class Basic extends React.Component<{}> {
  render() {
    return (
      <div>
        <Home />
        <SettingFilled />
        <Smile />
        <Sync spin />
        <Smile rotate={180} />
        <Loading />
      </div>
    );
  }
}
