function template(code, opts = {}, state = {}) {
  let props = '';

  if (opts.expandProps && opts.ref && opts.titleProp) {
    props = '{svgRef: string, title: string, ...props}';
  } else if (opts.expandProps && opts.titleProp) {
    props = '{title: string, ...props}';
  } else if (opts.expandProps && opts.ref) {
    props = '{svgRef: string, ...props}';
  } else if (opts.titleProp && opts.ref) {
    props = '{svgRef: string, title: string}';
  } else if (opts.expandProps) {
    props = 'props: object';
  } else if (opts.ref) {
    props = '{svgRef: string}';
  } else if (opts.titleProp) {
    props = '{title: string}';
  }

  let result = `import * as React from 'react'\n\n`;
  result += `const ${state.componentName}: React.SFC<object> = (${props}) => ${code}\n\n`;

  result += `${state.componentName}.displayName = '${state.componentName}'\n\n`;

  if (state.webpack && state.webpack.previousExport) {
    result += `export default ${state.webpack.previousExport}\n`;
    result += `export { ${state.componentName} as ReactComponent }`;
  } else if (state.rollup && state.rollup.previousExport) {
    result += `${state.rollup.previousExport}\n`;
    result += `export { ${state.componentName} as ReactComponent }`;
  } else {
    result += `export default ${state.componentName}`;
  }

  return result;
}

module.exports = template;
