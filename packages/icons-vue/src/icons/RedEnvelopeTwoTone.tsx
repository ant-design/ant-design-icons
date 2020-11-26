// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RedEnvelopeTwoToneSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RedEnvelopeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RedEnvelopeTwoTone: RedEnvelopeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedEnvelopeTwoToneSvg}></AntdIcon>;
};

RedEnvelopeTwoTone.displayName = 'RedEnvelopeTwoTone';
RedEnvelopeTwoTone.inheritAttrs = false;
export default RedEnvelopeTwoTone;