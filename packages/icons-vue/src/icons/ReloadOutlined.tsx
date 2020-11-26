// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ReloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReloadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ReloadOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ReloadOutlined: ReloadOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ReloadOutlinedSvg}></AntdIcon>;
};

ReloadOutlined.displayName = 'ReloadOutlined';
ReloadOutlined.inheritAttrs = false;
export default ReloadOutlined;