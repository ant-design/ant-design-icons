// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PoundOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PoundOutlinedSvg}></AntdIcon>;
};

PoundOutlined.displayName = 'PoundOutlined';
PoundOutlined.inheritAttrs = false;
export default PoundOutlined;