// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedditSquareFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedditSquareFilled: RedditSquareFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditSquareFilledSvg}></AntdIcon>;
};

RedditSquareFilled.displayName = 'RedditSquareFilled';
RedditSquareFilled.inheritAttrs = false;
export default RedditSquareFilled;