// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleOutlinedSvg}></AntdIcon>;
};

InfoCircleOutlined.displayName = 'InfoCircleOutlined';
InfoCircleOutlined.inheritAttrs = false;
export default InfoCircleOutlined;