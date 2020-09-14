// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SnippetsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SnippetsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SnippetsOutlinedSvg}></AntdIcon>;
};

SnippetsOutlined.displayName = 'SnippetsOutlined';
SnippetsOutlined.inheritAttrs = false;
export default SnippetsOutlined;