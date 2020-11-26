// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeFilled: ChromeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeFilledSvg}></AntdIcon>;
};

ChromeFilled.displayName = 'ChromeFilled';
ChromeFilled.inheritAttrs = false;
export default ChromeFilled;