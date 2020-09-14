// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseOutlinedSvg}></AntdIcon>;
};

CloseOutlined.displayName = 'CloseOutlined';
CloseOutlined.inheritAttrs = false;
export default CloseOutlined;