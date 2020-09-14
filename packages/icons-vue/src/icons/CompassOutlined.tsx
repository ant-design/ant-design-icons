// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CompassOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompassOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassOutlinedSvg}></AntdIcon>;
};

CompassOutlined.displayName = 'CompassOutlined';
CompassOutlined.inheritAttrs = false;
export default CompassOutlined;