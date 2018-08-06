import * as React from 'react';
import './index.less';

interface LayoutProps {
}

export default class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <div className={'container'}>
        Layouts
      </div>
    );
  }
}
