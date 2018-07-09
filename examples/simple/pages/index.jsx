import * as React from 'react';
import { library, Alibaba, Instagram, prefix } from '../../../esm';

library.add(Alibaba, Instagram);


export default class Index extends React.Component {

  componentDidMount() {
    library.dom.mount('__HELLO_WORLD__');
    console.log(library, 22233);
  }

  componentWillUnmount() {
    library.dom.unmount();
    console.log('unmounted', 456);
  }

  render() {
    return (
      <div>
        <div style={{ color: 'lightblue', fontSize: '3rem' }}>
          <span>Test Icon</span>
          <svg width="1em" height="1em" fill="currentColor">
            <use xlinkHref={`#${prefix}instagram`} />
          </svg>
        </div>
      </div>
    );
  }
}
