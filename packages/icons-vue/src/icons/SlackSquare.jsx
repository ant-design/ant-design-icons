
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlackSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/SlackSquareOutline';

export default {
  name: 'IconSlackSquare',
  displayName: 'SlackSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackSquareOutlineSvg } },
      children
    ),
};
