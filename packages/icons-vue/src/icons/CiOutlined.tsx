// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CiOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CiOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CiOutlined: CiOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiOutlinedSvg}></AntdIcon>;
};

CiOutlined.displayName = 'CiOutlined';
CiOutlined.inheritAttrs = false;
export default CiOutlined;