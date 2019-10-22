
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SettingTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SettingTwoTone';

export default {
  name: 'SettingTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SettingTwoToneSvg } },
      children
    ),
};
