
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/ScheduleTwoTone';

export default {
  name: 'IconScheduleTwoTone',
  displayName: 'ScheduleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScheduleTwoToneSvg } },
      children
    ),
};
