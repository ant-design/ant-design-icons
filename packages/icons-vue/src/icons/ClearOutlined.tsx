// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClearOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClearOutlinedSvg}></AntdIcon>;
};

ClearOutlined.displayName = 'ClearOutlined';
ClearOutlined.inheritAttrs = false;
export default ClearOutlined;