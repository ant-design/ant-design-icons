// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FrownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FrownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FrownOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FrownOutlinedSvg}></AntdIcon>;
};

FrownOutlined.displayName = 'FrownOutlined';
FrownOutlined.inheritAttrs = false;
export default FrownOutlined;