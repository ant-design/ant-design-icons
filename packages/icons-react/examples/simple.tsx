import { AntDesignOutline, DashboardOutline, TwitterOutline } from '@ant-design/icons';
import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import AntdIcon from '../src';

AntdIcon.add(DashboardOutline);

const Div = styled.div`
  position: relative;
  margin-bottom: 1rem;
  line-height: 1;
  &:after {
    width: 100%;
    height: 1px;
    content: '';
    position: absolute;
    bottom: 0.125em;
    left: 0;
    background-color: hotpink;
    z-index: -100;
  }
  &:before {
    width: 100%;
    height: 1px;
    content: '';
    position: absolute;
    top: 0.125em;
    left: 0;
    background-color: hotpink;
    z-index: -100;
  }
`;

const AlignAntdIcon = styled(AntdIcon)`
  vertical-align: -0.125em;
`;

class SimpleDemo extends React.Component<{}> {
  static displaySize = ['64px', '48px', '32px', '24px', '16px', '12px', '8px'];

  static relatedHref =
    'https://blog.prototypr.io/align-' +
    'svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4';

  renderStatement(fontSize: string) {
    const style: React.CSSProperties = {
      fontSize,
      color: (fontSize === '48px' && 'lightblue') || 'inherit'
    };
    return (
      <Div key={fontSize} style={style}>
        {fontSize}
        Ant Design
        <AlignAntdIcon type={AntDesignOutline} />
        0123
        <AlignAntdIcon type={'dashboard-o'} />
        你好
        <AlignAntdIcon type={TwitterOutline} />
      </Div>
    );
  }

  renderStatements() {
    return SimpleDemo.displaySize.map((fontSize) => {
      return this.renderStatement(fontSize);
    });
  }

  render() {
    return (
      <div>
        <h1>Simple Demo - Icons Alignments</h1>
        {this.renderStatements()}
        See{' '}
        <a href={SimpleDemo.relatedHref} target={'_blank'}>
          related blog
        </a>{' '}
        for detail.
      </div>
    );
  }
}

render(<SimpleDemo />, document.getElementById('__react-content'));
