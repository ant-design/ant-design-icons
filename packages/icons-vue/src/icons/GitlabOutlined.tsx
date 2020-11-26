// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GitlabOutlinedSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GitlabOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GitlabOutlined: GitlabOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitlabOutlinedSvg}></AntdIcon>;
};

GitlabOutlined.displayName = 'GitlabOutlined';
GitlabOutlined.inheritAttrs = false;
export default GitlabOutlined;