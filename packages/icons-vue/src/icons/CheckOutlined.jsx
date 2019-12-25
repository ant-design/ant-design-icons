// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';

export default {
  name: 'IconCheckOutlined',
  displayName: 'CheckOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckOutlinedSvg } },
      children,
    ),
};