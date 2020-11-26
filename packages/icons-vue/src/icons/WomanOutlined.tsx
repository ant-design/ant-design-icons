// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanOutlined: WomanOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanOutlinedSvg}></AntdIcon>;
};

WomanOutlined.displayName = 'WomanOutlined';
WomanOutlined.inheritAttrs = false;
export default WomanOutlined;