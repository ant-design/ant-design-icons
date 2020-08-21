// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseOutlinedSvg}></AntdIcon>;
};

PauseOutlined.displayName = 'PauseOutlined';
PauseOutlined.inheritAttrs = false;
export default PauseOutlined;