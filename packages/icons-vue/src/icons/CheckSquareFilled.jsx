// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';

export default {
  name: 'IconCheckSquareFilled',
  displayName: 'CheckSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckSquareFilledSvg } },
      children,
    ),
};