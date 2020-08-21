// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreOutlinedSvg}></AntdIcon>;
};

MoreOutlined.displayName = 'MoreOutlined';
MoreOutlined.inheritAttrs = false;
export default MoreOutlined;