// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EuroOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EuroOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EuroOutlinedSvg}></AntdIcon>;
};

EuroOutlined.displayName = 'EuroOutlined';
EuroOutlined.inheritAttrs = false;
export default EuroOutlined;