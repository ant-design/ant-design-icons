// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';

export default {
  name: 'IconMessageOutlined',
  displayName: 'MessageOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MessageOutlinedSvg } },
      children,
    ),
};