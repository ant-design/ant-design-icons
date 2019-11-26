import React, { useState, useCallback, useMemo } from 'react';
import * as allIconDefs from '../../es';
import { ThemeType, IconDefinition } from '../../es/types';
import { renderIconDefinitionToSVGElement } from '../../es/helpers';
import { Container, Card, NameDescription } from './commons';

const defsList = Object.keys(allIconDefs).map(
  (iconName) => (allIconDefs as { [key: string]: IconDefinition })[iconName]
);

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
