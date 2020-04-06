// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined';

export default {
  name: 'IconRedoOutlined',
  displayName: 'RedoOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RedoOutlinedSvg } },
      children,
    ),
};