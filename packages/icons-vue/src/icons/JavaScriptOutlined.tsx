// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JavaScriptOutlinedSvg from '@ant-design/icons-svg/lib/asn/JavaScriptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JavaScriptOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JavaScriptOutlined: JavaScriptOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JavaScriptOutlinedSvg}></AntdIcon>;
};

JavaScriptOutlined.displayName = 'JavaScriptOutlined';
JavaScriptOutlined.inheritAttrs = false;
export default JavaScriptOutlined;