
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/PlusCircleOutline';

export default {
  name: 'IconPlusCircle',
  displayName: 'PlusCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusCircleOutlineSvg } },
      children
    ),
};
