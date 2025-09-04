// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import JavaOutlinedSvg from '@ant-design/icons-svg/lib/asn/JavaOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface JavaOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const JavaOutlined: JavaOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={JavaOutlinedSvg}></AntdIcon>;
};

JavaOutlined.displayName = 'JavaOutlined';
JavaOutlined.inheritAttrs = false;
export default JavaOutlined;