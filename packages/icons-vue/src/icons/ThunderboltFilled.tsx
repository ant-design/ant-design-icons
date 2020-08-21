// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ThunderboltFilledSvg from '@ant-design/icons-svg/lib/asn/ThunderboltFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ThunderboltFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ThunderboltFilledSvg}></AntdIcon>;
};

ThunderboltFilled.displayName = 'ThunderboltFilled';
ThunderboltFilled.inheritAttrs = false;
export default ThunderboltFilled;