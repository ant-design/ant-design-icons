// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlibabaOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlibabaOutlined';

export default {
  name: 'IconAlibabaOutlined',
  displayName: 'AlibabaOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AlibabaOutlinedSvg } },
      children,
    ),
};