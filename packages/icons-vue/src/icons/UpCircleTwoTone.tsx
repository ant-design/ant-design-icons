// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpCircleTwoTone: UpCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpCircleTwoToneSvg}></AntdIcon>;
};

UpCircleTwoTone.displayName = 'UpCircleTwoTone';
UpCircleTwoTone.inheritAttrs = false;
export default UpCircleTwoTone;