// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DingtalkCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DingtalkCircleFilled: DingtalkCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DingtalkCircleFilledSvg}></AntdIcon>;
};

DingtalkCircleFilled.displayName = 'DingtalkCircleFilled';
DingtalkCircleFilled.inheritAttrs = false;
export default DingtalkCircleFilled;