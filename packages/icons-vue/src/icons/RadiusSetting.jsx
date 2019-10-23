
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusSettingOutlineSvg from '@ant-design/icons-svg/lib/outline/RadiusSettingOutline';

export default {
  name: 'IconRadiusSetting',
  displayName: 'RadiusSetting',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RadiusSettingOutlineSvg } },
      children
    ),
};
