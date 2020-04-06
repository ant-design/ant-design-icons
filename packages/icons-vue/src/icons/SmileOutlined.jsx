// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SmileOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmileOutlined';

export default {
  name: 'IconSmileOutlined',
  displayName: 'SmileOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SmileOutlinedSvg } },
      children,
    ),
};