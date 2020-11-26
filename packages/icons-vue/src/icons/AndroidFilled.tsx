// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AndroidFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AndroidFilled: AndroidFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AndroidFilledSvg}></AntdIcon>;
};

AndroidFilled.displayName = 'AndroidFilled';
AndroidFilled.inheritAttrs = false;
export default AndroidFilled;