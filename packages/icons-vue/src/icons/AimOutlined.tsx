// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AimOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AimOutlined: AimOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AimOutlinedSvg}></AntdIcon>;
};

AimOutlined.displayName = 'AimOutlined';
AimOutlined.inheritAttrs = false;
export default AimOutlined;