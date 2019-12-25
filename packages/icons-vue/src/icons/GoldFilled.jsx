// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';

export default {
  name: 'IconGoldFilled',
  displayName: 'GoldFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoldFilledSvg } },
      children,
    ),
};