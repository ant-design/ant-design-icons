// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DislikeOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeOutlinedSvg}></AntdIcon>;
};

DislikeOutlined.displayName = 'DislikeOutlined';
DislikeOutlined.inheritAttrs = false;
export default DislikeOutlined;