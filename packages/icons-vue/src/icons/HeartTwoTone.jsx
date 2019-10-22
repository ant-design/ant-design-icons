
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HeartTwoToneSvg from '@ant-design/icons-svg/lib/twotone/HeartTwoTone';

export default {
  name: 'HeartTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HeartTwoToneSvg } },
      children
    ),
};
