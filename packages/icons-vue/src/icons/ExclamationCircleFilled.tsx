// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ExclamationCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ExclamationCircleFilled: ExclamationCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ExclamationCircleFilledSvg}></AntdIcon>;
};

ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
ExclamationCircleFilled.inheritAttrs = false;
export default ExclamationCircleFilled;