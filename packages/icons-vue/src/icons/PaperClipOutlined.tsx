// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PaperClipOutlinedSvg from '@ant-design/icons-svg/lib/asn/PaperClipOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PaperClipOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PaperClipOutlinedSvg}></AntdIcon>;
};

PaperClipOutlined.displayName = 'PaperClipOutlined';
PaperClipOutlined.inheritAttrs = false;
export default PaperClipOutlined;