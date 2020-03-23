// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined';

export default {
  name: 'IconRightSquareOutlined',
  displayName: 'RightSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightSquareOutlinedSvg } },
      children,
    ),
};