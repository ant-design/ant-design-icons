// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QqSquareFilledSvg from '@ant-design/icons-svg/lib/asn/QqSquareFilled';

export default {
  name: 'IconQqSquareFilled',
  displayName: 'QqSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QqSquareFilledSvg } },
      children,
    ),
};