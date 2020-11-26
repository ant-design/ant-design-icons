// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyFilled: CopyFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyFilledSvg}></AntdIcon>;
};

CopyFilled.displayName = 'CopyFilled';
CopyFilled.inheritAttrs = false;
export default CopyFilled;