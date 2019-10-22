
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SmileTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SmileTwoTone';

export default {
  name: 'SmileTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SmileTwoToneSvg } },
      children
    ),
};
