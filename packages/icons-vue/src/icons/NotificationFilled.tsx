// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFilledSvg}></AntdIcon>;
};

NotificationFilled.displayName = 'NotificationFilled';
NotificationFilled.inheritAttrs = false;
export default NotificationFilled;