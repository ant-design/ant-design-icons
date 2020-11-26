// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GithubOutlinedSvg from '@ant-design/icons-svg/lib/asn/GithubOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GithubOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GithubOutlined: GithubOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GithubOutlinedSvg}></AntdIcon>;
};

GithubOutlined.displayName = 'GithubOutlined';
GithubOutlined.inheritAttrs = false;
export default GithubOutlined;