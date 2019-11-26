import React, { useMemo } from 'react';
import * as allIconDefs from '../../es';
import { ThemeType, IconDefinition } from '../../es/types';
import { renderIconDefinitionToSVGElement } from '../../es/helpers';
import { GridContainer, MiniCard, NameDescription } from './commons';
import { oldIconNames } from '../../build/constants';
import { set } from 'lodash';

const defsList = Object.keys(allIconDefs).map(
  (iconName) => (allIconDefs as { [key: string]: IconDefinition })[iconName]
);

const themes: ThemeType[] = ['filled', 'outlined', 'twotone'];

const acc: {
  [name: string]: {
    filled?: string;
    outlined?: string;
    twotone?: string;
  };
} = {};

for (const theme of themes) {
  defsList
    .filter((def) => def.theme === theme)
    .forEach((def) => {
      let name = def.name;
      if (oldIconNames.includes(name)) {
        name = `${name} (< 3.9)`;
      }
      set(acc, [name, theme], renderIconDefinitionToSVGElement(def));
    });
}

const list = Object.keys(acc).map((name) => {
  const target = acc[name]!;
  const count =
    (target.filled ? 1 : 0) +
    (target.outlined ? 1 : 0) +
    (target.twotone ? 1 : 0);
  return {
    name,
    filled: target.filled || '-',
    outlined: target.outlined || '-',
    twotone: target.twotone || '-',
    count
  };
});

list.sort((a, b) => a.count - b.count);

const AllIconsListV4: React.SFC = () => {
  const defs = useMemo(
    () =>
      list.map((def) => {
        return [
          <NameDescription key={`${def.name}-name`}>
            {def.name}
          </NameDescription>,
          <MiniCard
            key={`${def.name}-filled`}
            dangerouslySetInnerHTML={{
              __html: def.filled
            }}
          />,
          <MiniCard
            key={`${def.name}-outlined`}
            dangerouslySetInnerHTML={{
              __html: def.outlined
            }}
          />,
          <MiniCard
            key={`${def.name}-twotone`}
            dangerouslySetInnerHTML={{
              __html: def.twotone
            }}
          />
        ];
      }),
    []
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <GridContainer>
        <div>Name</div>
        <div>filled</div>
        <div>outlined</div>
        <div>twotone</div>
        {defs}
      </GridContainer>
    </div>
  );
};

export default AllIconsListV4;
