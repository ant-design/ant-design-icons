// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GithubFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GithubFilled: GithubFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GithubFilledSvg}></AntdIcon>;
};

GithubFilled.displayName = 'GithubFilled';
GithubFilled.inheritAttrs = false;
export default GithubFilled;