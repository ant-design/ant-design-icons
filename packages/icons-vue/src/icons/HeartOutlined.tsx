// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HeartOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartOutlinedSvg}></AntdIcon>;
};

HeartOutlined.displayName = 'HeartOutlined';
HeartOutlined.inheritAttrs = false;
export default HeartOutlined;