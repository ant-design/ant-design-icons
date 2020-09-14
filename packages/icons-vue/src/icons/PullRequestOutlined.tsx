// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PullRequestOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PullRequestOutlinedSvg}></AntdIcon>;
};

PullRequestOutlined.displayName = 'PullRequestOutlined';
PullRequestOutlined.inheritAttrs = false;
export default PullRequestOutlined;