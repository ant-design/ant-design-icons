// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ScanOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScanOutlinedSvg}></AntdIcon>;
};

ScanOutlined.displayName = 'ScanOutlined';
ScanOutlined.inheritAttrs = false;
export default ScanOutlined;