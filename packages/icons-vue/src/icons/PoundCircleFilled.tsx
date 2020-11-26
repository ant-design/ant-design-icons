// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PoundCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PoundCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PoundCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PoundCircleFilled: PoundCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoundCircleFilledSvg}></AntdIcon>;
};

PoundCircleFilled.displayName = 'PoundCircleFilled';
PoundCircleFilled.inheritAttrs = false;
export default PoundCircleFilled;