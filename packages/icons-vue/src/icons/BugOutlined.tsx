// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BugOutlinedSvg from '@ant-design/icons-svg/lib/asn/BugOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BugOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BugOutlinedSvg}></AntdIcon>;
};

BugOutlined.displayName = 'BugOutlined';
BugOutlined.inheritAttrs = false;
export default BugOutlined;