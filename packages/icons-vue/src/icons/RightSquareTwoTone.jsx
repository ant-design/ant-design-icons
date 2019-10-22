
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/RightSquareTwoTone';

export default {
  name: 'RightSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSquareTwoToneSvg } },
      children
    ),
};
