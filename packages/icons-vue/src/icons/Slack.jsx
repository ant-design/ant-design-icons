
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlackOutlineSvg from '@ant-design/icons-svg/lib/outline/SlackOutline';

export default {
  name: 'IconSlack',
  displayName: 'Slack',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackOutlineSvg } },
      children
    ),
};
