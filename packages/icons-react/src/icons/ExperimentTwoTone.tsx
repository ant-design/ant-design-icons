// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import ExperimentTwoToneSvg from '@ant-design/icons-svg/lib/asn/ExperimentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExperimentTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExperimentTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(ExperimentTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExperimentTwoTone';
}

export default RefIcon;