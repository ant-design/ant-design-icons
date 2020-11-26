// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedEnvelopeOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedEnvelopeOutlined: RedEnvelopeOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedEnvelopeOutlinedSvg}></AntdIcon>;
};

RedEnvelopeOutlined.displayName = 'RedEnvelopeOutlined';
RedEnvelopeOutlined.inheritAttrs = false;
export default RedEnvelopeOutlined;