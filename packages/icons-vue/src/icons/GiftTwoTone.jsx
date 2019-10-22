
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GiftTwoToneSvg from '@ant-design/icons-svg/lib/twotone/GiftTwoTone';

export default {
  name: 'GiftTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GiftTwoToneSvg } },
      children
    ),
};
