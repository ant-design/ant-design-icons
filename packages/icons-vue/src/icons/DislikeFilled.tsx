// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeFilledSvg from '@ant-design/icons-svg/lib/asn/DislikeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeFilled: DislikeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeFilledSvg}></AntdIcon>;
};

DislikeFilled.displayName = 'DislikeFilled';
DislikeFilled.inheritAttrs = false;
export default DislikeFilled;