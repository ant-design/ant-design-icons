
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/twotone/LikeTwoTone';

export default {
  name: 'IconLikeTwoTone',
  displayName: 'LikeTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LikeTwoToneSvg } },
      children
    ),
};
