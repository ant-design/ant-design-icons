// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitlabOutlinedSvg from '@ant-design/icons-svg/lib/asn/GitlabOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitlabOutlinedSvg}></AntdIcon>;
};

GitlabOutlined.displayName = 'GitlabOutlined';
GitlabOutlined.inheritAttrs = false;
export default GitlabOutlined;