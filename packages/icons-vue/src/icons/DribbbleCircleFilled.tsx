// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DribbbleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DribbbleCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DribbbleCircleFilled: DribbbleCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DribbbleCircleFilledSvg}></AntdIcon>;
};

DribbbleCircleFilled.displayName = 'DribbbleCircleFilled';
DribbbleCircleFilled.inheritAttrs = false;
export default DribbbleCircleFilled;