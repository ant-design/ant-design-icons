import * as React from 'react';
import { Alibaba } from '../../../lib';


export default class Index extends React.Component<{}> {
  render() {
    return (
      <div>
        <div style={{ color: 'lightblue', fontSize: '3rem' }}>
          <span>Test Icon</span>
          <Alibaba/>
        </div>
      </div>
    );
  }
}
