// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlackOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlackOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlackOutlined: SlackOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackOutlinedSvg}></AntdIcon>;
};

SlackOutlined.displayName = 'SlackOutlined';
SlackOutlined.inheritAttrs = false;
export default SlackOutlined;