// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiffFilled = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiffFilledSvg}></AntdIcon>;
};

DiffFilled.displayName = 'DiffFilled';
DiffFilled.inheritAttrs = false;
export default DiffFilled;