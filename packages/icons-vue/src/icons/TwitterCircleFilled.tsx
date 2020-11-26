// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TwitterCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TwitterCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TwitterCircleFilled: TwitterCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TwitterCircleFilledSvg}></AntdIcon>;
};

TwitterCircleFilled.displayName = 'TwitterCircleFilled';
TwitterCircleFilled.inheritAttrs = false;
export default TwitterCircleFilled;