// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownCircleFilled: DownCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownCircleFilledSvg}></AntdIcon>;
};

DownCircleFilled.displayName = 'DownCircleFilled';
DownCircleFilled.inheritAttrs = false;
export default DownCircleFilled;