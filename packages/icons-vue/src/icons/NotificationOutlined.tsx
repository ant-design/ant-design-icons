// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationOutlined: NotificationOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationOutlinedSvg}></AntdIcon>;
};

NotificationOutlined.displayName = 'NotificationOutlined';
NotificationOutlined.inheritAttrs = false;
export default NotificationOutlined;