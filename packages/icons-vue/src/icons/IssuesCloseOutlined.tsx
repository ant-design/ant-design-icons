// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import IssuesCloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/IssuesCloseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const IssuesCloseOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IssuesCloseOutlinedSvg}></AntdIcon>;
};

IssuesCloseOutlined.displayName = 'IssuesCloseOutlined';
IssuesCloseOutlined.inheritAttrs = false;
export default IssuesCloseOutlined;