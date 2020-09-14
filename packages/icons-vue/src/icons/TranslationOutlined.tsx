// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import TranslationOutlinedSvg from '@ant-design/icons-svg/lib/asn/TranslationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TranslationOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TranslationOutlinedSvg}></AntdIcon>;
};

TranslationOutlined.displayName = 'TranslationOutlined';
TranslationOutlined.inheritAttrs = false;
export default TranslationOutlined;