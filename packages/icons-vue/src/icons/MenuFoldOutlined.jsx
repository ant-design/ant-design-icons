// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';

export default {
  name: 'IconMenuFoldOutlined',
  displayName: 'MenuFoldOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MenuFoldOutlinedSvg } },
      children,
    ),
};