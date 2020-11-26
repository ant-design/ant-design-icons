// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RollbackOutlinedSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RollbackOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RollbackOutlined: RollbackOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RollbackOutlinedSvg}></AntdIcon>;
};

RollbackOutlined.displayName = 'RollbackOutlined';
RollbackOutlined.inheritAttrs = false;
export default RollbackOutlined;