// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClusterOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClusterOutlinedSvg}></AntdIcon>;
};

ClusterOutlined.displayName = 'ClusterOutlined';
ClusterOutlined.inheritAttrs = false;
export default ClusterOutlined;