// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusOutlinedSvg}></AntdIcon>;
};

PlusOutlined.displayName = 'PlusOutlined';
PlusOutlined.inheritAttrs = false;
export default PlusOutlined;