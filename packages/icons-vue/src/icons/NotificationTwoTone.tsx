// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationTwoTone = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationTwoToneSvg}></AntdIcon>;
};

NotificationTwoTone.displayName = 'NotificationTwoTone';
NotificationTwoTone.inheritAttrs = false;
export default NotificationTwoTone;