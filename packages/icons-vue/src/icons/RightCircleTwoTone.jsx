
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/RightCircleTwoTone';

export default {
  name: 'IconRightCircleTwoTone',
  displayName: 'RightCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightCircleTwoToneSvg } },
      children
    ),
};
