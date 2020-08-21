// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LeftOutlinedSvg}></AntdIcon>;
};

LeftOutlined.displayName = 'LeftOutlined';
LeftOutlined.inheritAttrs = false;
export default LeftOutlined;