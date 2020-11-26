// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FireTwoToneSvg from '@ant-design/icons-svg/lib/asn/FireTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FireTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FireTwoTone: FireTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FireTwoToneSvg}></AntdIcon>;
};

FireTwoTone.displayName = 'FireTwoTone';
FireTwoTone.inheritAttrs = false;
export default FireTwoTone;