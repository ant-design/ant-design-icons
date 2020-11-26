// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MehOutlinedSvg from '@ant-design/icons-svg/lib/asn/MehOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MehOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MehOutlined: MehOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MehOutlinedSvg}></AntdIcon>;
};

MehOutlined.displayName = 'MehOutlined';
MehOutlined.inheritAttrs = false;
export default MehOutlined;