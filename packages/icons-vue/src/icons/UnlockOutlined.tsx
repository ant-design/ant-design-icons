// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlockOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlockOutlined: UnlockOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlockOutlinedSvg}></AntdIcon>;
};

UnlockOutlined.displayName = 'UnlockOutlined';
UnlockOutlined.inheritAttrs = false;
export default UnlockOutlined;