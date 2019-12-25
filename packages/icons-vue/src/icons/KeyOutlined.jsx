// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';

export default {
  name: 'IconKeyOutlined',
  displayName: 'KeyOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: KeyOutlinedSvg } },
      children,
    ),
};