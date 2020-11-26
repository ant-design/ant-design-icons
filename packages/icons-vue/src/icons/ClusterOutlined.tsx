// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClusterOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClusterOutlined: ClusterOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClusterOutlinedSvg}></AntdIcon>;
};

ClusterOutlined.displayName = 'ClusterOutlined';
ClusterOutlined.inheritAttrs = false;
export default ClusterOutlined;