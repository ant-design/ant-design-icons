// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone';
import AntdIcon, { AntdIconProps, ForwardRefBaseComponent } from '../components/AntdIcon';

const StarTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarTwoToneSvg} />;

StarTwoTone.displayName = 'StarTwoTone';

const Comp: ForwardRefBaseComponent<AntdIconProps> = React.forwardRef<HTMLSpanElement, AntdIconProps>(StarTwoTone);
export default Comp;