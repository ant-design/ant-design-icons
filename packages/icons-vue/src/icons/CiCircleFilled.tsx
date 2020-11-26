// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CiCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CiCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CiCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CiCircleFilled: CiCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiCircleFilledSvg}></AntdIcon>;
};

CiCircleFilled.displayName = 'CiCircleFilled';
CiCircleFilled.inheritAttrs = false;
export default CiCircleFilled;