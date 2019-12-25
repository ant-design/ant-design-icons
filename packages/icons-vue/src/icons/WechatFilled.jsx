// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';

export default {
  name: 'IconWechatFilled',
  displayName: 'WechatFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WechatFilledSvg } },
      children,
    ),
};