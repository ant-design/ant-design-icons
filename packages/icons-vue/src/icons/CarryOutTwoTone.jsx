
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CarryOutTwoTone';

export default {
  name: 'CarryOutTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CarryOutTwoToneSvg } },
      children
    ),
};
