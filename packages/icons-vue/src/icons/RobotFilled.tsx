// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RobotFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RobotFilled: RobotFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RobotFilledSvg}></AntdIcon>;
};

RobotFilled.displayName = 'RobotFilled';
RobotFilled.inheritAttrs = false;
export default RobotFilled;