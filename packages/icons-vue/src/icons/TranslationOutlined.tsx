// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TranslationOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TranslationOutlined: TranslationOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslationOutlinedSvg}></AntdIcon>;
};

TranslationOutlined.displayName = 'TranslationOutlined';
TranslationOutlined.inheritAttrs = false;
export default TranslationOutlined;