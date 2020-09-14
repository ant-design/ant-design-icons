// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarOutlinedSvg}></AntdIcon>;
};

StarOutlined.displayName = 'StarOutlined';
StarOutlined.inheritAttrs = false;
export default StarOutlined;