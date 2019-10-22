
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WechatOutlineSvg from '@ant-design/icons-svg/lib/outline/WechatOutline';

export default {
  name: 'Wechat',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WechatOutlineSvg } },
      children
    ),
};
