// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitcherOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitcherOutlinedSvg} />;

 /**![switcher](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTc1MiAyNDBIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY2MDhjMCAxNy43IDE0LjMgMzIgMzIgMzJoNjA4YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjI3MmMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTQwIDYwMEgxODRWMzEyaDUyOHY1Mjh6bTE2OC03MjhIMjY0Yy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4aDU3NnY1NzZjMCA0LjQgMy42IDggOCA4aDU2YzQuNCAwIDgtMy42IDgtOFYxNDRjMC0xNy43LTE0LjMtMzItMzItMzJ6TTMwMCA1NTBoMjk2djY0SDMwMHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitcherOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SwitcherOutlined';
}

export default RefIcon;