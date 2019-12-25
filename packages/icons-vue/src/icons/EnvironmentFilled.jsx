// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';

export default {
  name: 'IconEnvironmentFilled',
  displayName: 'EnvironmentFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EnvironmentFilledSvg } },
      children,
    ),
};