// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FireOutlinedSvg from '@ant-design/icons-svg/lib/asn/FireOutlined';

export default {
  name: 'IconFireOutlined',
  displayName: 'FireOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FireOutlinedSvg } },
      children,
    ),
};