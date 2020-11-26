// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EuroCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EuroCircleFilled: EuroCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EuroCircleFilledSvg}></AntdIcon>;
};

EuroCircleFilled.displayName = 'EuroCircleFilled';
EuroCircleFilled.inheritAttrs = false;
export default EuroCircleFilled;