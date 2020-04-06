// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined';

export default {
  name: 'IconExpandAltOutlined',
  displayName: 'ExpandAltOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ExpandAltOutlinedSvg } },
      children,
    ),
};