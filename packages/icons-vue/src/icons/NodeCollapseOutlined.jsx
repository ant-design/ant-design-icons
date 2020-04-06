// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined';

export default {
  name: 'IconNodeCollapseOutlined',
  displayName: 'NodeCollapseOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: NodeCollapseOutlinedSvg } },
      children,
    ),
};