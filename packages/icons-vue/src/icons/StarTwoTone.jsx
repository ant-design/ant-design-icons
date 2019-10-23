
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import StarTwoToneSvg from '@ant-design/icons-svg/lib/twotone/StarTwoTone';

export default {
  name: 'IconStarTwoTone',
  displayName: 'StarTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: StarTwoToneSvg } },
      children
    ),
};
