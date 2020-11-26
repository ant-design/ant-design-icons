// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedditCircleFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedditCircleFilled: RedditCircleFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditCircleFilledSvg}></AntdIcon>;
};

RedditCircleFilled.displayName = 'RedditCircleFilled';
RedditCircleFilled.inheritAttrs = false;
export default RedditCircleFilled;