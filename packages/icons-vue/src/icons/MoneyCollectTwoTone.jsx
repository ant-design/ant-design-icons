
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/twotone/MoneyCollectTwoTone';

export default {
  name: 'MoneyCollectTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MoneyCollectTwoToneSvg } },
      children
    ),
};
