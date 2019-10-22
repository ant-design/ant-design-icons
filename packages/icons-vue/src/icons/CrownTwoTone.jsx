
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CrownTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CrownTwoTone';

export default {
  name: 'CrownTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CrownTwoToneSvg } },
      children
    ),
};
