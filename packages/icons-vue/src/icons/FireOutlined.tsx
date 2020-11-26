// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FireOutlinedSvg from '@ant-design/icons-svg/lib/asn/FireOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FireOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FireOutlined: FireOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FireOutlinedSvg}></AntdIcon>;
};

FireOutlined.displayName = 'FireOutlined';
FireOutlined.inheritAttrs = false;
export default FireOutlined;