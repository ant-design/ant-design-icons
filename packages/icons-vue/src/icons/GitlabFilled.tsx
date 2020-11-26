// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GitlabFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GitlabFilled: GitlabFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitlabFilledSvg}></AntdIcon>;
};

GitlabFilled.displayName = 'GitlabFilled';
GitlabFilled.inheritAttrs = false;
export default GitlabFilled;