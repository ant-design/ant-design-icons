// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WomanOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanOutlinedSvg}></AntdIcon>;
};

WomanOutlined.displayName = 'WomanOutlined';
WomanOutlined.inheritAttrs = false;
export default WomanOutlined;