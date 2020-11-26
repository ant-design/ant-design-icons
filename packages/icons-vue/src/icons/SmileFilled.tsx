// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileFilled: SmileFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileFilledSvg}></AntdIcon>;
};

SmileFilled.displayName = 'SmileFilled';
SmileFilled.inheritAttrs = false;
export default SmileFilled;