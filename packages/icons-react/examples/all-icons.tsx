import * as icons from '@ant-design/icons';
import manifest from '@ant-design/icons/lib/manifest';
import mapper from '@ant-design/icons/lib/mapNameToIdentifier';
import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import AntdIcon from '../src';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80vw;
  margin: auto;
`;

const Card = styled.div`
  height: 90px;
  margin: 12px 0 16px;
  width: 16.6666%;
  text-align: center;
`;

const NameDescription = styled.p`
  display: block;
  text-align: center;
  transform: scale(0.83);
  font-family: 'Lucida Console', Consolas;
  white-space: nowrap;
`;

class AllIconDemo extends React.Component<{}> {
  renderIcons(names: string[]) {
    return names.map((name) => (
      <Card key={name}>
        <AntdIcon
          style={{ fontSize: '24px' }}
          key={name}
          type={icons[mapper[name]]}
        />
        <NameDescription>{name}</NameDescription>
      </Card>
    ));
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>All Icons</h1>
        <Container>{this.renderIcons(manifest)}</Container>
      </div>
    );
  }
}

render(<AllIconDemo />, document.getElementById('__react-content'));
