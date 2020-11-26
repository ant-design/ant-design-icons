// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleFilled: InfoCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleFilledSvg}></AntdIcon>;
};

InfoCircleFilled.displayName = 'InfoCircleFilled';
InfoCircleFilled.inheritAttrs = false;
export default InfoCircleFilled;