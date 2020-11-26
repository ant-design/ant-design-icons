// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedEnvelopeFilledIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedEnvelopeFilled: RedEnvelopeFilledIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedEnvelopeFilledSvg}></AntdIcon>;
};

RedEnvelopeFilled.displayName = 'RedEnvelopeFilled';
RedEnvelopeFilled.inheritAttrs = false;
export default RedEnvelopeFilled;