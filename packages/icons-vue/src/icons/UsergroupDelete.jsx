
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsergroupDeleteOutlineSvg from '@ant-design/icons-svg/lib/outline/UsergroupDeleteOutline';

export default {
  name: 'IconUsergroupDelete',
  displayName: 'UsergroupDelete',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsergroupDeleteOutlineSvg } },
      children
    ),
};
