// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightCircleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightCircleOutlined: CopyrightCircleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightCircleOutlinedSvg}></AntdIcon>;
};

CopyrightCircleOutlined.displayName = 'CopyrightCircleOutlined';
CopyrightCircleOutlined.inheritAttrs = false;
export default CopyrightCircleOutlined;