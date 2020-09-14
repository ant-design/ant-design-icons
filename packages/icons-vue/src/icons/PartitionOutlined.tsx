// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PartitionOutlinedSvg from '@ant-design/icons-svg/lib/asn/PartitionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PartitionOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PartitionOutlinedSvg}></AntdIcon>;
};

PartitionOutlined.displayName = 'PartitionOutlined';
PartitionOutlined.inheritAttrs = false;
export default PartitionOutlined;