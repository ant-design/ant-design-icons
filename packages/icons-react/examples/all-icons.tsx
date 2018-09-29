import * as icons from '@ant-design/icons/lib/dist';
import manifest from '@ant-design/icons/lib/manifest';
import {
  IconDefinition,
  Manifest,
  ThemeType
} from '@ant-design/icons/lib/types';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import AntdIcon from '../src';

const antDesignIcons = icons as {
  [key: string]: IconDefinition;
};

AntdIcon.add(...Object.keys(antDesignIcons).map((key) => antDesignIcons[key]));

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

@observer
class AllIconDemo extends React.Component<{}> {
  @observable
  names: Manifest = manifest;

  @observable
  currentTheme: ThemeType = 'outline';

  @computed
  get Icons() {
    return this.names[this.currentTheme].map((name) => {
      let computedName = name;
      switch (this.currentTheme) {
        case 'fill':
          computedName += '-fill';
          break;
        case 'outline':
          computedName += '-o';
          break;
        case 'twotone':
          computedName += '-twotone';
          break;
        default:
          throw new TypeError(`Unknown theme ${this.currentTheme}`);
      }
      return (
        <Card key={name}>
          <AntdIcon
            style={{ fontSize: '24px' }}
            key={computedName}
            type={computedName}
          />
          <NameDescription>{computedName}</NameDescription>
        </Card>
      );
    });
  }

  @action
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.currentTarget.value as ThemeType;
    this.currentTheme = value;
  }

  render() {
    return (
      <div style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>All Icons</h1>
        <div style={{ textAlign: 'center' }}>
          <select
            name={'theme-select'}
            value={this.currentTheme}
            onChange={this.handleSelectChange}
          >
            <option value={'fill'}>Filled</option>
            <option value={'outline'}>Outlined</option>
            <option value={'twotone'}>Two-Tone</option>
          </select>
        </div>
        <Container>{this.Icons}</Container>
      </div>
    );
  }
}

render(<AllIconDemo />, document.getElementById('__react-content'));
