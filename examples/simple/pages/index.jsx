import * as React from 'react';
import { Alibaba, Instagram, DribbbleCircleFill } from '../../../lib';


export default class Index extends React.Component {
  render() {
    return (
      <div>
        <div style={{ color: 'lightblue', fontSize: '3rem' }}>
          <span>Test Icon</span>
          <Alibaba/>
          <Instagram/>
          <DribbbleCircleFill/>
        </div>
      </div>
    );
  }
}
