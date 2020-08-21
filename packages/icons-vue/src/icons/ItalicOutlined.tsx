// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ItalicOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ItalicOutlinedSvg}></AntdIcon>;
};

ItalicOutlined.displayName = 'ItalicOutlined';
ItalicOutlined.inheritAttrs = false;
export default ItalicOutlined;