// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BulbOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulbOutlinedSvg}></AntdIcon>;
};

BulbOutlined.displayName = 'BulbOutlined';
BulbOutlined.inheritAttrs = false;
export default BulbOutlined;