// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined';

export default {
  name: 'IconConsoleSqlOutlined',
  displayName: 'ConsoleSqlOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ConsoleSqlOutlinedSvg } },
      children,
    ),
};