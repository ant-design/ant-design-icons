// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RobotOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RobotOutlined: RobotOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RobotOutlinedSvg}></AntdIcon>;
};

RobotOutlined.displayName = 'RobotOutlined';
RobotOutlined.inheritAttrs = false;
export default RobotOutlined;