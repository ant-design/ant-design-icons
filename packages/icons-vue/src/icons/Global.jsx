
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GlobalOutlineSvg from '@ant-design/icons-svg/lib/outline/GlobalOutline';

export default {
  name: 'Global',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GlobalOutlineSvg } },
      children
    ),
};
