// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyFilledSvg from '@ant-design/icons-svg/lib/asn/CopyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyFilledSvg}></AntdIcon>;
};

CopyFilled.displayName = 'CopyFilled';
CopyFilled.inheritAttrs = false;
export default CopyFilled;