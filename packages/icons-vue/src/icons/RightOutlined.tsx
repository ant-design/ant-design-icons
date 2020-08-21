// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RightOutlinedSvg}></AntdIcon>;
};

RightOutlined.displayName = 'RightOutlined';
RightOutlined.inheritAttrs = false;
export default RightOutlined;