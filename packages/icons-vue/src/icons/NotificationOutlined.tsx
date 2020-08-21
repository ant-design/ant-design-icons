// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationOutlinedSvg}></AntdIcon>;
};

NotificationOutlined.displayName = 'NotificationOutlined';
NotificationOutlined.inheritAttrs = false;
export default NotificationOutlined;