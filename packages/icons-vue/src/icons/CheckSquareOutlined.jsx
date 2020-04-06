// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined';

export default {
  name: 'IconCheckSquareOutlined',
  displayName: 'CheckSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CheckSquareOutlinedSvg } },
      children,
    ),
};