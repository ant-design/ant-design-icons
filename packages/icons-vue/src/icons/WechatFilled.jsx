
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WechatFillSvg from '@ant-design/icons-svg/lib/fill/WechatFill';

export default {
  name: 'IconWechatFilled',
  displayName: 'WechatFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WechatFillSvg } },
      children
    ),
};
