// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CloseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CloseCircleOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleOutlinedSvg}></AntdIcon>;
};

CloseCircleOutlined.displayName = 'CloseCircleOutlined';
CloseCircleOutlined.inheritAttrs = false;
export default CloseCircleOutlined;