// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyOutlined: CopyOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyOutlinedSvg}></AntdIcon>;
};

CopyOutlined.displayName = 'CopyOutlined';
CopyOutlined.inheritAttrs = false;
export default CopyOutlined;