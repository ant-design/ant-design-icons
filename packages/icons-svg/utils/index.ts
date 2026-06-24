import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';
import { pipe } from 'ramda';
import type { ThemeTypeUpperCase } from '../templates/types';

export interface IdentifierMeta {
  name: string;
  themeSuffix?: ThemeTypeUpperCase;
}

export interface GetIdentifierType {
  (meta: IdentifierMeta): string;
}

export const getIdentifier: GetIdentifierType = pipe(
  ({ name, themeSuffix }: IdentifierMeta) =>
    name + (themeSuffix ? `-${themeSuffix}` : ''),
  camelCase,
  upperFirst
);
