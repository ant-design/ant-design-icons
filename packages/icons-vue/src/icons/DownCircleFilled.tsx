// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownCircleFilledSvg}></AntdIcon>;
};

DownCircleFilled.displayName = 'DownCircleFilled';
DownCircleFilled.inheritAttrs = false;
export default DownCircleFilled;