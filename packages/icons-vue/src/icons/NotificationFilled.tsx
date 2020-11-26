// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFilled: NotificationFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFilledSvg}></AntdIcon>;
};

NotificationFilled.displayName = 'NotificationFilled';
NotificationFilled.inheritAttrs = false;
export default NotificationFilled;