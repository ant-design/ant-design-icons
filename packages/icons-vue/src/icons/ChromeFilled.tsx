// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ChromeFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeFilledSvg}></AntdIcon>;
};

ChromeFilled.displayName = 'ChromeFilled';
ChromeFilled.inheritAttrs = false;
export default ChromeFilled;