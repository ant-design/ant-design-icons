import * as icons from '@ant-design/icons';
import manifest from '@ant-design/icons/lib/manifest';
import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import AntdIcon from '../src';

AntdIcon.add(...Object.keys(icons).map((key) => icons[key]));

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

const Text = styled.span`
  margin: 0 0.5rem;
`;

class AllIconDemo extends React.Component {
  state = {
    primaryColor: '#1890ff'
  };

  onPrimaryColorChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    AntdIcon.setTwoTonePrimaryColor(e.currentTarget.value);
    this.setState({
      primaryColor: e.currentTarget.value
    });
  }

  componentWillMount() {
    AntdIcon.setTwoTonePrimaryColor(this.state.primaryColor);
  }

  renderIcons(names: string[]) {
    return names.map((name) => (
      <Card key={`${name}-twotone`}>
        <AntdIcon
          style={{ fontSize: '24px' }}
          key={`${name}-twotone`}
          type={`${name}-twotone`}
        />
        <NameDescription>{`${name}-twotone`}</NameDescription>
      </Card>
    ));
  }

  render() {
    return (
      <div style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>Two Tone</h1>
        <div style={{ textAlign: 'center' }}>
          <h2>Primary Color</h2>
          <input
            type={'color'}
            value={this.state.primaryColor}
            onChange={this.onPrimaryColorChange}
          />
          <Text>{this.state.primaryColor}</Text>
        </div>
        <Container>{this.renderIcons(manifest)}</Container>
      </div>
    );
  }
}

render(<AllIconDemo />, document.getElementById('__react-content'));
