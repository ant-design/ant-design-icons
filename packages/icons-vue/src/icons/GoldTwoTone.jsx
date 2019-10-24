
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/twotone/GoldTwoTone';

export default {
  name: 'IconGoldTwoTone',
  displayName: 'GoldTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GoldTwoToneSvg } },
      children
    ),
};
