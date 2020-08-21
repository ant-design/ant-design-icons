// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DragOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DragOutlinedSvg}></AntdIcon>;
};

DragOutlined.displayName = 'DragOutlined';
DragOutlined.inheritAttrs = false;
export default DragOutlined;