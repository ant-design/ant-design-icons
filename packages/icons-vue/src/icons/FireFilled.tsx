// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FireFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FireFilled: FireFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FireFilledSvg}></AntdIcon>;
};

FireFilled.displayName = 'FireFilled';
FireFilled.inheritAttrs = false;
export default FireFilled;