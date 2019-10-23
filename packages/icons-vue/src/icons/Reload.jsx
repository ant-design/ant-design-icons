
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReloadOutlineSvg from '@ant-design/icons-svg/lib/outline/ReloadOutline';

export default {
  name: 'IconReload',
  displayName: 'Reload',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReloadOutlineSvg } },
      children
    ),
};
