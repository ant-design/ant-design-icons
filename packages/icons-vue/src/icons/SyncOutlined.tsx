// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SyncOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SyncOutlined: SyncOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SyncOutlinedSvg}></AntdIcon>;
};

SyncOutlined.displayName = 'SyncOutlined';
SyncOutlined.inheritAttrs = false;
export default SyncOutlined;