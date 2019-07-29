import * as React from 'react';
import { PageProps } from '../types';

interface NotFoundProps extends PageProps<{}, {}> {
}

export default class NotFound extends React.PureComponent<NotFoundProps> {
  render() {
    return (
      <div >
        Not Found
      </div>
    );
  }
}
