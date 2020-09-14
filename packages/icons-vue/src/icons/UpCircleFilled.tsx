// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UpCircleFilledSvg from '@ant-design/icons-svg/lib/asn/UpCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpCircleFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UpCircleFilledSvg}></AntdIcon>;
};

UpCircleFilled.displayName = 'UpCircleFilled';
UpCircleFilled.inheritAttrs = false;
export default UpCircleFilled;