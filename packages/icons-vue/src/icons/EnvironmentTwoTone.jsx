
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/twotone/EnvironmentTwoTone';

export default {
  name: 'EnvironmentTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnvironmentTwoToneSvg } },
      children
    ),
};
