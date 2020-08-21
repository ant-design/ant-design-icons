// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ManOutlinedSvg from '@ant-design/icons-svg/lib/asn/ManOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ManOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManOutlinedSvg}></AntdIcon>;
};

ManOutlined.displayName = 'ManOutlined';
ManOutlined.inheritAttrs = false;
export default ManOutlined;