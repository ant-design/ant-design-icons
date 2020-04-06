// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';

export default {
  name: 'IconEnvironmentTwoTone',
  displayName: 'EnvironmentTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: EnvironmentTwoToneSvg } },
      children,
    ),
};