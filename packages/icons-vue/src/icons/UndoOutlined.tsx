// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UndoOutlinedSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UndoOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UndoOutlinedSvg}></AntdIcon>;
};

UndoOutlined.displayName = 'UndoOutlined';
UndoOutlined.inheritAttrs = false;
export default UndoOutlined;