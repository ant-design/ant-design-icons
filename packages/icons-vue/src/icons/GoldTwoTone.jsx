// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone';

export default {
  name: 'IconGoldTwoTone',
  displayName: 'GoldTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GoldTwoToneSvg } },
      children,
    ),
};