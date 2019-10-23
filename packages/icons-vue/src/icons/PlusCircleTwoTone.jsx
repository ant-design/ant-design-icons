
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/twotone/PlusCircleTwoTone';

export default {
  name: 'IconPlusCircleTwoTone',
  displayName: 'PlusCircleTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusCircleTwoToneSvg } },
      children
    ),
};
