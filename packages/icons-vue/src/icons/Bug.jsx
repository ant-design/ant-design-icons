
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BugOutlineSvg from '@ant-design/icons-svg/lib/outline/BugOutline';

export default {
  name: 'IconBug',
  displayName: 'Bug',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BugOutlineSvg } },
      children
    ),
};
