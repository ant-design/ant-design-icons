
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GithubOutlineSvg from '@ant-design/icons-svg/lib/outline/GithubOutline';

export default {
  name: 'Github',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GithubOutlineSvg } },
      children
    ),
};
