// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ProductOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProductOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ProductOutlinedIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ProductOutlined: ProductOutlinedIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ProductOutlinedSvg}></AntdIcon>;
};

ProductOutlined.displayName = 'ProductOutlined';
ProductOutlined.inheritAttrs = false;
export default ProductOutlined;