// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';

export default {
  name: 'IconCaretLeftFilled',
  displayName: 'CaretLeftFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CaretLeftFilledSvg } },
      children,
    ),
};