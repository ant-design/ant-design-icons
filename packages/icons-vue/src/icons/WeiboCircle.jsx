
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WeiboCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/WeiboCircleOutline';

export default {
  name: 'WeiboCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboCircleOutlineSvg } },
      children
    ),
};
