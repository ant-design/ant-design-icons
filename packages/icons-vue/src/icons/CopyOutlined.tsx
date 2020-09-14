// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyOutlinedSvg}></AntdIcon>;
};

CopyOutlined.displayName = 'CopyOutlined';
CopyOutlined.inheritAttrs = false;
export default CopyOutlined;