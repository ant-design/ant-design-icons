
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import VerticalRightOutlineSvg from '@ant-design/icons-svg/lib/outline/VerticalRightOutline';

export default {
  name: 'IconVerticalRight',
  displayName: 'VerticalRight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: VerticalRightOutlineSvg } },
      children
    ),
};
