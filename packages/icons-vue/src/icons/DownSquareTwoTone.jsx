
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DownSquareTwoTone';

export default {
  name: 'DownSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownSquareTwoToneSvg } },
      children
    ),
};
