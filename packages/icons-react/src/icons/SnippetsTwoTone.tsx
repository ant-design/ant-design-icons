// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SnippetsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SnippetsTwoTone = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SnippetsTwoToneSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SnippetsTwoTone);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SnippetsTwoTone';
}

export default RefIcon;