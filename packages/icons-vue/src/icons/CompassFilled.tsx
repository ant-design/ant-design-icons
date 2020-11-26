// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CompassFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CompassFilled: CompassFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CompassFilledSvg}></AntdIcon>;
};

CompassFilled.displayName = 'CompassFilled';
CompassFilled.inheritAttrs = false;
export default CompassFilled;