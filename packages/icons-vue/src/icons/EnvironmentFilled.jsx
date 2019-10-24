
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnvironmentFillSvg from '@ant-design/icons-svg/lib/fill/EnvironmentFill';

export default {
  name: 'IconEnvironmentFilled',
  displayName: 'EnvironmentFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EnvironmentFillSvg } },
      children
    ),
};
