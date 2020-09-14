// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownOutlinedSvg}></AntdIcon>;
};

DownOutlined.displayName = 'DownOutlined';
DownOutlined.inheritAttrs = false;
export default DownOutlined;