// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CaretRightOutlinedSvg}></AntdIcon>;
};

CaretRightOutlined.displayName = 'CaretRightOutlined';
CaretRightOutlined.inheritAttrs = false;
export default CaretRightOutlined;