
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UsergroupAddOutlineSvg from '@ant-design/icons-svg/lib/outline/UsergroupAddOutline';

export default {
  name: 'IconUsergroupAdd',
  displayName: 'UsergroupAdd',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UsergroupAddOutlineSvg } },
      children
    ),
};
