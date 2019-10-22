
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MehTwoToneSvg from '@ant-design/icons-svg/lib/twotone/MehTwoTone';

export default {
  name: 'MehTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: MehTwoToneSvg } },
      children
    ),
};
