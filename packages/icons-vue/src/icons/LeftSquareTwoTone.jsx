
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/LeftSquareTwoTone';

export default {
  name: 'IconLeftSquareTwoTone',
  displayName: 'LeftSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftSquareTwoToneSvg } },
      children
    ),
};
