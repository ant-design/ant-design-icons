
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CheckSquareTwoTone';

export default {
  name: 'CheckSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSquareTwoToneSvg } },
      children
    ),
};
