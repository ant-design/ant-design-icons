// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/InfoCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleTwoTone: InfoCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleTwoToneSvg}></AntdIcon>;
};

InfoCircleTwoTone.displayName = 'InfoCircleTwoTone';
InfoCircleTwoTone.inheritAttrs = false;
export default InfoCircleTwoTone;