
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/RightCircleOutline';

export default {
  name: 'IconRightCircle',
  displayName: 'RightCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightCircleOutlineSvg } },
      children
    ),
};
