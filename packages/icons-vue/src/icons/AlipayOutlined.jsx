// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';

export default {
  name: 'IconAlipayOutlined',
  displayName: 'AlipayOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlipayOutlinedSvg } },
      children,
    ),
};