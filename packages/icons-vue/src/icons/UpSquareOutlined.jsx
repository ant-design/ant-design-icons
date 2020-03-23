// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined';

export default {
  name: 'IconUpSquareOutlined',
  displayName: 'UpSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpSquareOutlinedSvg } },
      children,
    ),
};