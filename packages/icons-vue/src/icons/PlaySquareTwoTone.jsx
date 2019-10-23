
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PlaySquareTwoTone';

export default {
  name: 'IconPlaySquareTwoTone',
  displayName: 'PlaySquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlaySquareTwoToneSvg } },
      children
    ),
};
