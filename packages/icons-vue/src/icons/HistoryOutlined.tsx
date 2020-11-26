// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HistoryOutlinedSvg from '@ant-design/icons-svg/lib/asn/HistoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HistoryOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HistoryOutlined: HistoryOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HistoryOutlinedSvg}></AntdIcon>;
};

HistoryOutlined.displayName = 'HistoryOutlined';
HistoryOutlined.inheritAttrs = false;
export default HistoryOutlined;