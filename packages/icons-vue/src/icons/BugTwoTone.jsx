
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BugTwoToneSvg from '@ant-design/icons-svg/lib/twotone/BugTwoTone';

export default {
  name: 'BugTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BugTwoToneSvg } },
      children
    ),
};
