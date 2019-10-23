
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WomanOutlineSvg from '@ant-design/icons-svg/lib/outline/WomanOutline';

export default {
  name: 'IconWoman',
  displayName: 'Woman',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WomanOutlineSvg } },
      children
    ),
};
