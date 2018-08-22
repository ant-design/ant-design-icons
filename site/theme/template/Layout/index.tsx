import * as React from 'react';
import { PageProps } from '../../types';

interface LayoutProps extends PageProps<{}, {}> {
}

export default class Layout extends React.PureComponent<LayoutProps> {
  render() {
    return (
      <div className={'container'}>
        Layouts
      </div>
    );
  }
}
