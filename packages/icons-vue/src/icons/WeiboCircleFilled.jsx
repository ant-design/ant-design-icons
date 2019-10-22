
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WeiboCircleFillSvg from '@ant-design/icons-svg/lib/fill/WeiboCircleFill';

export default {
  name: 'WeiboCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboCircleFillSvg } },
      children
    ),
};
