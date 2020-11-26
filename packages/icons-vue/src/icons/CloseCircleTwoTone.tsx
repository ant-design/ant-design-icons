// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleTwoTone: CloseCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleTwoToneSvg}></AntdIcon>;
};

CloseCircleTwoTone.displayName = 'CloseCircleTwoTone';
CloseCircleTwoTone.inheritAttrs = false;
export default CloseCircleTwoTone;