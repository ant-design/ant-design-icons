// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HighlightOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HighlightOutlinedSvg}></AntdIcon>;
};

HighlightOutlined.displayName = 'HighlightOutlined';
HighlightOutlined.inheritAttrs = false;
export default HighlightOutlined;