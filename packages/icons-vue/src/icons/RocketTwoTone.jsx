// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone';

export default {
  name: 'IconRocketTwoTone',
  displayName: 'RocketTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RocketTwoToneSvg } },
      children,
    ),
};