
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FrownTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FrownTwoTone';

export default {
  name: 'FrownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FrownTwoToneSvg } },
      children
    ),
};
