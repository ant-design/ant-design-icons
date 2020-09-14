// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HistoryOutlined = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HistoryOutlinedSvg}></AntdIcon>;
};

HistoryOutlined.displayName = 'HistoryOutlined';
HistoryOutlined.inheritAttrs = false;
export default HistoryOutlined;