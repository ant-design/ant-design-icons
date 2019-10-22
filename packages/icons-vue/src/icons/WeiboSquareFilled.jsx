
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import WeiboSquareFillSvg from '@ant-design/icons-svg/lib/fill/WeiboSquareFill';

export default {
  name: 'WeiboSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: WeiboSquareFillSvg } },
      children
    ),
};
