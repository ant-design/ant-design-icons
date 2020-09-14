// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleFilledSvg}></AntdIcon>;
};

CloseCircleFilled.displayName = 'CloseCircleFilled';
CloseCircleFilled.inheritAttrs = false;
export default CloseCircleFilled;