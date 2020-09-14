// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ApiFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ApiFilledSvg}></AntdIcon>;
};

ApiFilled.displayName = 'ApiFilled';
ApiFilled.inheritAttrs = false;
export default ApiFilled;