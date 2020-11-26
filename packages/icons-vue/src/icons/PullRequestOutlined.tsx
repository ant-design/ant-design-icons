// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PullRequestOutlinedSvg from '@ant-design/icons-svg/lib/asn/PullRequestOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PullRequestOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PullRequestOutlined: PullRequestOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PullRequestOutlinedSvg}></AntdIcon>;
};

PullRequestOutlined.displayName = 'PullRequestOutlined';
PullRequestOutlined.inheritAttrs = false;
export default PullRequestOutlined;