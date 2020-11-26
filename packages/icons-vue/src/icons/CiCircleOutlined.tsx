// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CiCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CiCircleOutlined: CiCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiCircleOutlinedSvg}></AntdIcon>;
};

CiCircleOutlined.displayName = 'CiCircleOutlined';
CiCircleOutlined.inheritAttrs = false;
export default CiCircleOutlined;