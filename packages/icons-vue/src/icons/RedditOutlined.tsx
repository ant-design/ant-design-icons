// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedditOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedditOutlined: RedditOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditOutlinedSvg}></AntdIcon>;
};

RedditOutlined.displayName = 'RedditOutlined';
RedditOutlined.inheritAttrs = false;
export default RedditOutlined;