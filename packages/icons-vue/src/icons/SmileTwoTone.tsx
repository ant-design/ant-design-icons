// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileTwoTone: SmileTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileTwoToneSvg}></AntdIcon>;
};

SmileTwoTone.displayName = 'SmileTwoTone';
SmileTwoTone.inheritAttrs = false;
export default SmileTwoTone;