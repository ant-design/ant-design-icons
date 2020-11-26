// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleFilled: CloseCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleFilledSvg}></AntdIcon>;
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
CloseCircleFilled.inheritAttrs = false;
export default CloseCircleFilled;