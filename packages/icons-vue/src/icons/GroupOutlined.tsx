// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GroupOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GroupOutlinedSvg}></AntdIcon>;
};

GroupOutlined.displayName = 'GroupOutlined';
GroupOutlined.inheritAttrs = false;
export default GroupOutlined;