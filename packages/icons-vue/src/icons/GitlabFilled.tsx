// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitlabFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitlabFilledSvg}></AntdIcon>;
};

GitlabFilled.displayName = 'GitlabFilled';
GitlabFilled.inheritAttrs = false;
export default GitlabFilled;