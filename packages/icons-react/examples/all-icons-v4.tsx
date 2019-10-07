import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { ThemeType } from '@ant-design/icons-svg/es/types';
import * as AntdIcons from '../src/icons';
import category from './category.json';
import { camelCase, upperFirst } from 'lodash';

const list = Object.keys(category).map(categoryName => ({
  key: categoryName,
  names: category[categoryName],
}));

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 90vw;
  margin: auto;
`;

const Card = styled.div`
  height: 90px;
  margin: 8px;
  width: 16.6666%;
  text-align: center;
`;

const NameDescription = styled.p`
  display: block;
  text-align: center;
  font-family: 'Lucida Console', Consolas;
  word-break: break-all;
`;

interface OneCategory {
  key: string;
  names: string[];
}

interface ComponentsCategory {
  key: string;
  components: React.FC<any>[];
}

@observer
export default class AllIconsDemoV4 extends React.Component {
  @observable
  currentTheme = 'Outlined';

  oneCategory({ key, names }: OneCategory): ComponentsCategory {
    return {
      key,
      components: names
        .map(name => {
          const fullName = (
            upperFirst(camelCase(name)) + this.currentTheme
          ).replace(/Outlined$/, '');
          return (
            (AntdIcons as { [key: string]: React.FC<any> })[fullName] || null
          );
        })
        .filter(_ => _),
    };
  }

  @action
  handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    const value = e.currentTarget.value as ThemeType;
    this.currentTheme = value;
  };

  render() {
    return (
      <div style={{ color: '#555' }}>
        <h1 style={{ textAlign: 'center' }}>All Icons V4</h1>
        <div style={{ textAlign: 'center' }}>
          <select
            name="theme-select"
            value={this.currentTheme}
            onChange={this.handleSelectChange}
          >
            <option value="Filled">Filled</option>
            <option value="Outlined">Outlined</option>
            <option value="TwoTone">Two-Tone</option>
          </select>
        </div>
        <Container>
          {list.map(one => {
            const { key, components } = this.oneCategory(one);
            return [
              <h2 key={`title-${key}`}>{key} ({components.length})</h2>,
              <Container key={`container-${key}`}>
                {components.map(Component => (
                  <Card key={Component.name}>
                    <Component style={{ fontSize: '32px' }} />
                    <NameDescription>{Component.name}</NameDescription>
                  </Card>
                ))}
              </Container>,
            ];
          })}
        </Container>
      </div>
    );
  }
}
