// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CopyrightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyrightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CopyrightOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CopyrightOutlined: CopyrightOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyrightOutlinedSvg}></AntdIcon>;
};

CopyrightOutlined.displayName = 'CopyrightOutlined';
CopyrightOutlined.inheritAttrs = false;
export default CopyrightOutlined;