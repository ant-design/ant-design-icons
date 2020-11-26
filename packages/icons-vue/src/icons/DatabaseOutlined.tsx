// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DatabaseOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DatabaseOutlined: DatabaseOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DatabaseOutlinedSvg}></AntdIcon>;
};

DatabaseOutlined.displayName = 'DatabaseOutlined';
DatabaseOutlined.inheritAttrs = false;
export default DatabaseOutlined;