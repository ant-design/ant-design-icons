// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone';

export default {
  name: 'IconScheduleTwoTone',
  displayName: 'ScheduleTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ScheduleTwoToneSvg } },
      children,
    ),
};