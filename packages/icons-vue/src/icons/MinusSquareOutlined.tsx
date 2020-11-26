// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MinusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MinusSquareOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MinusSquareOutlined: MinusSquareOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MinusSquareOutlinedSvg}></AntdIcon>;
};

MinusSquareOutlined.displayName = 'MinusSquareOutlined';
MinusSquareOutlined.inheritAttrs = false;
export default MinusSquareOutlined;