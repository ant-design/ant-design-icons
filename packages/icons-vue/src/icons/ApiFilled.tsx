// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ApiFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ApiFilled: ApiFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ApiFilledSvg}></AntdIcon>;
};

ApiFilled.displayName = 'ApiFilled';
ApiFilled.inheritAttrs = false;
export default ApiFilled;