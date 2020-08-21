// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PlusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlusSquareOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PlusSquareOutlinedSvg}></AntdIcon>;
};

PlusSquareOutlined.displayName = 'PlusSquareOutlined';
PlusSquareOutlined.inheritAttrs = false;
export default PlusSquareOutlined;