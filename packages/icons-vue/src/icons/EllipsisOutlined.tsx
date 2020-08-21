// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import EllipsisOutlinedSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EllipsisOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EllipsisOutlinedSvg}></AntdIcon>;
};

EllipsisOutlined.displayName = 'EllipsisOutlined';
EllipsisOutlined.inheritAttrs = false;
export default EllipsisOutlined;