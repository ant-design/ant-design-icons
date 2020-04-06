// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';

export default {
  name: 'IconShoppingCartOutlined',
  displayName: 'ShoppingCartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShoppingCartOutlinedSvg } },
      children,
    ),
};