// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined';

export default {
  name: 'IconRadiusUpleftOutlined',
  displayName: 'RadiusUpleftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RadiusUpleftOutlinedSvg } },
      children,
    ),
};