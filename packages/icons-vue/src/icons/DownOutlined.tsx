// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DownOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DownOutlined: DownOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownOutlinedSvg}></AntdIcon>;
};

DownOutlined.displayName = 'DownOutlined';
DownOutlined.inheritAttrs = false;
export default DownOutlined;