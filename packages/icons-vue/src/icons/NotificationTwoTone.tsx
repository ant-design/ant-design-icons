// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationTwoTone: NotificationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationTwoToneSvg}></AntdIcon>;
};

NotificationTwoTone.displayName = 'NotificationTwoTone';
NotificationTwoTone.inheritAttrs = false;
export default NotificationTwoTone;