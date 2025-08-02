// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import KubernetesOutlinedSvg from '@ant-design/icons-svg/lib/asn/KubernetesOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface KubernetesOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const KubernetesOutlined: KubernetesOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={KubernetesOutlinedSvg}></AntdIcon>;
};

KubernetesOutlined.displayName = 'KubernetesOutlined';
KubernetesOutlined.inheritAttrs = false;
export default KubernetesOutlined;