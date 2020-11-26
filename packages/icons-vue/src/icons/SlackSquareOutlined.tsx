// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlackSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/SlackSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlackSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlackSquareOutlined: SlackSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackSquareOutlinedSvg}></AntdIcon>;
};

SlackSquareOutlined.displayName = 'SlackSquareOutlined';
SlackSquareOutlined.inheritAttrs = false;
export default SlackSquareOutlined;