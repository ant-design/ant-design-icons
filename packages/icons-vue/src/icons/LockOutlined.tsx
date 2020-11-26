// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LockOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LockOutlined: LockOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LockOutlinedSvg}></AntdIcon>;
};

LockOutlined.displayName = 'LockOutlined';
LockOutlined.inheritAttrs = false;
export default LockOutlined;