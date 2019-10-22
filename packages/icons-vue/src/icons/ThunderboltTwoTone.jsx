
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ThunderboltTwoTone';

export default {
  name: 'ThunderboltTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ThunderboltTwoToneSvg } },
      children
    ),
};
