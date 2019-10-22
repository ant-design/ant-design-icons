
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DownCircleTwoTone';

export default {
  name: 'DownCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownCircleTwoToneSvg } },
      children
    ),
};
