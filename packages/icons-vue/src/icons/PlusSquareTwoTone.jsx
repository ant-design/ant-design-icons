
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PlusSquareTwoTone';

export default {
  name: 'PlusSquareTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusSquareTwoToneSvg } },
      children
    ),
};
