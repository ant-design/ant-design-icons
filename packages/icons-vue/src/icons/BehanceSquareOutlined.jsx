// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined';

export default {
  name: 'IconBehanceSquareOutlined',
  displayName: 'BehanceSquareOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BehanceSquareOutlinedSvg } },
      children,
    ),
};