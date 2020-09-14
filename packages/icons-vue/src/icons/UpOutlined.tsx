// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UpOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpOutlinedSvg}></AntdIcon>;
};

UpOutlined.displayName = 'UpOutlined';
UpOutlined.inheritAttrs = false;
export default UpOutlined;