
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ZhihuOutlineSvg from '@ant-design/icons-svg/lib/outline/ZhihuOutline';

export default {
  name: 'Zhihu',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZhihuOutlineSvg } },
      children
    ),
};
