// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LoadingOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LoadingOutlinedSvg}></AntdIcon>;
};

LoadingOutlined.displayName = 'LoadingOutlined';
LoadingOutlined.inheritAttrs = false;
export default LoadingOutlined;