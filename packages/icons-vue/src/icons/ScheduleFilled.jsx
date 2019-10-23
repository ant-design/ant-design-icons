
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScheduleFillSvg from '@ant-design/icons-svg/lib/fill/ScheduleFill';

export default {
  name: 'IconScheduleFilled',
  displayName: 'ScheduleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ScheduleFillSvg } },
      children
    ),
};
