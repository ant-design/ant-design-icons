// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UpCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UpCircleFilled: UpCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpCircleFilledSvg}></AntdIcon>;
};

UpCircleFilled.displayName = 'UpCircleFilled';
UpCircleFilled.inheritAttrs = false;
export default UpCircleFilled;