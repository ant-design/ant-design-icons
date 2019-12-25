// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined';

export default {
  name: 'IconRocketOutlined',
  displayName: 'RocketOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RocketOutlinedSvg } },
      children,
    ),
};