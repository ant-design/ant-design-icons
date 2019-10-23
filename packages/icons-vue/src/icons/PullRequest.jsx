
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PullRequestOutlineSvg from '@ant-design/icons-svg/lib/outline/PullRequestOutline';

export default {
  name: 'IconPullRequest',
  displayName: 'PullRequest',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PullRequestOutlineSvg } },
      children
    ),
};
