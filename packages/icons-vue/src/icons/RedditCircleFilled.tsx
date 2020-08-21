// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditCircleFilledSvg}></AntdIcon>;
};

RedditCircleFilled.displayName = 'RedditCircleFilled';
RedditCircleFilled.inheritAttrs = false;
export default RedditCircleFilled;