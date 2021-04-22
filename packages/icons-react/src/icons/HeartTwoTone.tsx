// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const HeartTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartTwoToneSvg} />;

HeartTwoTone.displayName = 'HeartTwoTone';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartTwoTone);
export default Comp;