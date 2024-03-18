// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import QuestionCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/QuestionCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const QuestionCircleTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={QuestionCircleTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(QuestionCircleTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'QuestionCircleTwoTone';
}

export default RefIcon;