
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WeiboSquareOutlineSvg from '@ant-design/icons-svg/lib/outline/WeiboSquareOutline';

export default {
  name: 'IconWeiboSquare',
  displayName: 'WeiboSquare',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboSquareOutlineSvg } },
      children
    ),
};
