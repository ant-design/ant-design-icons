// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AliwangwangFilledSvg from '@ant-design/icons-svg/lib/asn/AliwangwangFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AliwangwangFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AliwangwangFilled: AliwangwangFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AliwangwangFilledSvg}></AntdIcon>;
};

AliwangwangFilled.displayName = 'AliwangwangFilled';
AliwangwangFilled.inheritAttrs = false;
export default AliwangwangFilled;