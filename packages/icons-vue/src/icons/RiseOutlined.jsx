// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RiseOutlinedSvg from '@ant-design/icons-svg/lib/asn/RiseOutlined';

export default {
  name: 'IconRiseOutlined',
  displayName: 'RiseOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RiseOutlinedSvg } },
      children,
    ),
};