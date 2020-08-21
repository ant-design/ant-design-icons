// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GithubOutlinedSvg from '@ant-design/icons-svg/lib/asn/GithubOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GithubOutlinedSvg}></AntdIcon>;
};

GithubOutlined.displayName = 'GithubOutlined';
GithubOutlined.inheritAttrs = false;
export default GithubOutlined;