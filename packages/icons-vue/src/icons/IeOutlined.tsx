// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IeOutlinedSvg from '@ant-design/icons-svg/lib/asn/IeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IeOutlinedSvg}></AntdIcon>;
};

IeOutlined.displayName = 'IeOutlined';
IeOutlined.inheritAttrs = false;
export default IeOutlined;