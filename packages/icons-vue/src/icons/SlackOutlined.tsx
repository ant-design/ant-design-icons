// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SlackOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SlackOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackOutlinedSvg}></AntdIcon>;
};

SlackOutlined.displayName = 'SlackOutlined';
SlackOutlined.inheritAttrs = false;
export default SlackOutlined;