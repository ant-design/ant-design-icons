// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined';

export default {
  name: 'IconGoldOutlined',
  displayName: 'GoldOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoldOutlinedSvg } },
      children,
    ),
};