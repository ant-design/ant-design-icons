// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlipayOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlipayOutlinedSvg}></AntdIcon>;
};

AlipayOutlined.displayName = 'AlipayOutlined';
AlipayOutlined.inheritAttrs = false;
export default AlipayOutlined;