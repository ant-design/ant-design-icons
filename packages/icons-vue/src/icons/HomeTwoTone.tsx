// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTwoTone: HomeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTwoToneSvg}></AntdIcon>;
};

HomeTwoTone.displayName = 'HomeTwoTone';
HomeTwoTone.inheritAttrs = false;
export default HomeTwoTone;