// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleOutlinedSvg}></AntdIcon>;
};

PauseCircleOutlined.displayName = 'PauseCircleOutlined';
PauseCircleOutlined.inheritAttrs = false;
export default PauseCircleOutlined;