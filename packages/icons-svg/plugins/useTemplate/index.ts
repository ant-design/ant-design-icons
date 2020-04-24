import { createTrasformStream } from '../creator';
import template from 'lodash.template';

export interface UseTemplatePluginOptions {
  template: string;
  mapToInterpolate: MapToInterpolate;
}

export interface MapToInterpolate {
  (meta: { name: string; content: string; path: string }): object;
}

export const useTemplate = ({
  template: tplContent,
  mapToInterpolate
}: UseTemplatePluginOptions) => {
  const executor = template(tplContent);
  return createTrasformStream((content, { stem: name, path }) =>
    executor(mapToInterpolate({ name, content, path }))
  );
};
