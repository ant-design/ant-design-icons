// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DribbbleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DribbbleOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DribbbleOutlined: DribbbleOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DribbbleOutlinedSvg}></AntdIcon>;
};

DribbbleOutlined.displayName = 'DribbbleOutlined';
DribbbleOutlined.inheritAttrs = false;
export default DribbbleOutlined;