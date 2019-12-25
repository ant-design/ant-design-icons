// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RocketFilledSvg from '@ant-design/icons-svg/lib/asn/RocketFilled';

export default {
  name: 'IconRocketFilled',
  displayName: 'RocketFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RocketFilledSvg } },
      children,
    ),
};