// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PushpinOutlinedSvg from '@ant-design/icons-svg/lib/asn/PushpinOutlined';

export default {
  name: 'IconPushpinOutlined',
  displayName: 'PushpinOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PushpinOutlinedSvg } },
      children,
    ),
};