// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InfoCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleFilledSvg}></AntdIcon>;
};

InfoCircleFilled.displayName = 'InfoCircleFilled';
InfoCircleFilled.inheritAttrs = false;
export default InfoCircleFilled;