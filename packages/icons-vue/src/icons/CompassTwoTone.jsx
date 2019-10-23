
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/twotone/CompassTwoTone';

export default {
  name: 'IconCompassTwoTone',
  displayName: 'CompassTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CompassTwoToneSvg } },
      children
    ),
};
