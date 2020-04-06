// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';

export default {
  name: 'IconMenuOutlined',
  displayName: 'MenuOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MenuOutlinedSvg } },
      children,
    ),
};