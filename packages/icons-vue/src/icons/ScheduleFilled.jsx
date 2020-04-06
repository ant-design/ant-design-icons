// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled';

export default {
  name: 'IconScheduleFilled',
  displayName: 'ScheduleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScheduleFilledSvg } },
      children,
    ),
};