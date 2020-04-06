// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';

export default {
  name: 'IconCaretUpOutlined',
  displayName: 'CaretUpOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretUpOutlinedSvg } },
      children,
    ),
};