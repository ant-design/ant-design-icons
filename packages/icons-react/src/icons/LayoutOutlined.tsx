// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LayoutOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LayoutOutlinedSvg} />;

 /**![layout](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTg4MCAxMTJIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY3MzZjMCAxNy43IDE0LjMgMzIgMzIgMzJoNzM2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE0NGMwLTE3LjctMTQuMy0zMi0zMi0zMnptLTY5NiA3MmgxMzZ2NjU2SDE4NFYxODR6bTY1NiA2NTZIMzg0VjM4NGg0NTZ2NDU2ek0zODQgMzIwVjE4NGg0NTZ2MTM2SDM4NHoiIC8+PC9zdmc+) */ 
const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(LayoutOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutOutlined';
}

export default RefIcon;