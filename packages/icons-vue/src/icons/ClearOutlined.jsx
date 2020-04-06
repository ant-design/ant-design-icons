// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined';

export default {
  name: 'IconClearOutlined',
  displayName: 'ClearOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ClearOutlinedSvg } },
      children,
    ),
};