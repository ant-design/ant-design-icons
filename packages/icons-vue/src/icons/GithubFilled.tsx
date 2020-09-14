// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GithubFilledSvg}></AntdIcon>;
};

GithubFilled.displayName = 'GithubFilled';
GithubFilled.inheritAttrs = false;
export default GithubFilled;