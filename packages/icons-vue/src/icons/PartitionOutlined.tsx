// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PartitionOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PartitionOutlined: PartitionOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PartitionOutlinedSvg}></AntdIcon>;
};

PartitionOutlined.displayName = 'PartitionOutlined';
PartitionOutlined.inheritAttrs = false;
export default PartitionOutlined;