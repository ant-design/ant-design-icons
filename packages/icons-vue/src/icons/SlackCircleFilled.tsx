// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlackCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SlackCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlackCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlackCircleFilled: SlackCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlackCircleFilledSvg}></AntdIcon>;
};

SlackCircleFilled.displayName = 'SlackCircleFilled';
SlackCircleFilled.inheritAttrs = false;
export default SlackCircleFilled;