import { ThemeType } from '@ant-design/icons-svg/lib/types';
import { action, computed, observable } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import * as AntdIcons from '../src/icons';

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

const allIcons: {
  [key: string]: any;
} = AntdIcons;

const iconsList = Object.keys(allIcons)
  .map(iconName => allIcons[iconName]);

@observer
export default class AllIconDemo extends React.Component<{}> {
  @observable
  currentTheme = 'Outlined';

  @computed
  get Icons() {
    return iconsList
      .filter((icon) => {
        if (this.currentTheme !== 'Outlined') {
          return icon.name.includes(this.currentTheme);
        }
        return ['Filled', 'TwoTone'].every(theme => !icon.name.includes(theme));
      })
      .map((Component) => (
        <Card key={Component.name}>
          <Component style={{ fontSize: '24px' }} />
          <NameDescription>{Component.name}</NameDescription>
        </Card>
      ));
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
            <option value="Filled">Filled</option>
            <option value="Outlined">Outlined</option>
            <option value="TwoTone">Two-Tone</option>
          </select>
        </div>
        <Container>{this.Icons}</Container>
      </div>
    );
  }
}
