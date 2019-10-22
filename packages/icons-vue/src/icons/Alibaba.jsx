
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AlibabaOutlineSvg from '@ant-design/icons-svg/lib/outline/AlibabaOutline';

export default {
  name: 'Alibaba',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AlibabaOutlineSvg } },
      children
    ),
};
