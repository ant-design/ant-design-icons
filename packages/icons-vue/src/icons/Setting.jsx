
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SettingOutlineSvg from '@ant-design/icons-svg/lib/outline/SettingOutline';

export default {
  name: 'Setting',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SettingOutlineSvg } },
      children
    ),
};
