
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/LeftCircleTwoTone';

export default {
  name: 'LeftCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftCircleTwoToneSvg } },
      children
    ),
};
