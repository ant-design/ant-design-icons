import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import * as allIconDefs from '../es';
import { ThemeType, IconDefinition } from '../es/types';
import { renderIconDefinitionToSVGElement } from '../es/helpers';

const defsList = Object.keys(allIconDefs).map(
  (iconName) => (allIconDefs as { [key: string]: IconDefinition })[iconName]
);

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: auto;
`;

const Card = styled.div`
  margin: 8px;
  width: 16.6666%;
  text-align: center;

  > div {
    height: 60px;
  }

  svg {
    height: 100%;
  }
`;

const NameDescription = styled.p`
  display: block;
  text-align: center;
  font-family: 'Lucida Console', Consolas;
  word-break: break-all;
`;

const AllIconsV4: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('outlined');

  const handleThemeChange = useCallback((e) => {
    const value = e.currentTarget.value as ThemeType;
    setCurrentTheme(value);
  }, []);

  const defs = useMemo(
    () =>
      defsList
        .filter((def) => def.theme === currentTheme)
        .map((def) => (
          <Card key={def.name}>
            <div
              dangerouslySetInnerHTML={{
                __html: renderIconDefinitionToSVGElement(def)
              }}
            ></div>
            <NameDescription>{def.name}</NameDescription>
          </Card>
        )),
    [currentTheme]
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <select value={currentTheme} onChange={handleThemeChange}>
        <option value="filled">filled</option>
        <option value="outlined">outlined</option>
        <option value="twotone">twotone</option>
      </select>
      <Container>{defs}</Container>
    </div>
  );
};

export default AllIconsV4;
