
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/twotone/DatabaseTwoTone';

export default {
  name: 'DatabaseTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DatabaseTwoToneSvg } },
      children
    ),
};
