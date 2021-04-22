// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const HeartOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HeartOutlinedSvg} />;

HeartOutlined.displayName = 'HeartOutlined';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(HeartOutlined);
export default Comp;