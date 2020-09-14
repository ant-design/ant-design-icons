// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleFilledSvg}></AntdIcon>;
};

PauseCircleFilled.displayName = 'PauseCircleFilled';
PauseCircleFilled.inheritAttrs = false;
export default PauseCircleFilled;