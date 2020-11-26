// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExclamationCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExclamationCircleTwoTone: ExclamationCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExclamationCircleTwoToneSvg}></AntdIcon>;
};

ExclamationCircleTwoTone.displayName = 'ExclamationCircleTwoTone';
ExclamationCircleTwoTone.inheritAttrs = false;
export default ExclamationCircleTwoTone;