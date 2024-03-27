// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MobileOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MobileOutlinedSvg} />;

 /**![mobile](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc0NCA2MkgyODBjLTM1LjMgMC02NCAyOC43LTY0IDY0djc2OGMwIDM1LjMgMjguNyA2NCA2NCA2NGg0NjRjMzUuMyAwIDY0LTI4LjcgNjQtNjRWMTI2YzAtMzUuMy0yOC43LTY0LTY0LTY0em0tOCA4MjRIMjg4VjEzNGg0NDh2NzUyek00NzIgNzg0YTQwIDQwIDAgMTA4MCAwIDQwIDQwIDAgMTAtODAgMHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(MobileOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MobileOutlined';
}

export default RefIcon;