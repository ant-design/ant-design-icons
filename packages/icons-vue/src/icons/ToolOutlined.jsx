// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined';

export default {
  name: 'IconToolOutlined',
  displayName: 'ToolOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ToolOutlinedSvg } },
      children,
    ),
};