// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CiCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CiCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CiCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CiCircleOutlinedSvg}></AntdIcon>;
};

CiCircleOutlined.displayName = 'CiCircleOutlined';
CiCircleOutlined.inheritAttrs = false;
export default CiCircleOutlined;