
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WeiboOutlineSvg from '@ant-design/icons-svg/lib/outline/WeiboOutline';

export default {
  name: 'IconWeibo',
  displayName: 'Weibo',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboOutlineSvg } },
      children
    ),
};
