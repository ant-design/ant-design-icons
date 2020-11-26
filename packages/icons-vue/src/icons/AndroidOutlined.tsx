// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AndroidOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AndroidOutlined: AndroidOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AndroidOutlinedSvg}></AntdIcon>;
};

AndroidOutlined.displayName = 'AndroidOutlined';
AndroidOutlined.inheritAttrs = false;
export default AndroidOutlined;