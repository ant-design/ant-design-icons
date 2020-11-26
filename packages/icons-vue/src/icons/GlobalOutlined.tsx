// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalOutlinedSvg from '@ant-design/icons-svg/lib/asn/GlobalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalOutlined: GlobalOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalOutlinedSvg}></AntdIcon>;
};

GlobalOutlined.displayName = 'GlobalOutlined';
GlobalOutlined.inheritAttrs = false;
export default GlobalOutlined;