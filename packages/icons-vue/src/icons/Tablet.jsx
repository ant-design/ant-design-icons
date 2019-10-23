
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TabletOutlineSvg from '@ant-design/icons-svg/lib/outline/TabletOutline';

export default {
  name: 'IconTablet',
  displayName: 'Tablet',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TabletOutlineSvg } },
      children
    ),
};
