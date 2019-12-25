// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined';

export default {
  name: 'IconDesktopOutlined',
  displayName: 'DesktopOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: DesktopOutlinedSvg } },
      children,
    ),
};