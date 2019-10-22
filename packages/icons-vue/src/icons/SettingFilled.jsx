
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SettingFillSvg from '@ant-design/icons-svg/lib/fill/SettingFill';

export default {
  name: 'SettingFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SettingFillSvg } },
      children
    ),
};
