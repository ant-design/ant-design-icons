// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ControlTwoToneSvg from '@ant-design/icons-svg/lib/asn/ControlTwoTone';

export default {
  name: 'IconControlTwoTone',
  displayName: 'ControlTwoTone',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ControlTwoToneSvg } },
      children,
    ),
};