
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import YuqueOutlineSvg from '@ant-design/icons-svg/lib/outline/YuqueOutline';

export default {
  name: 'Yuque',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: YuqueOutlineSvg } },
      children
    ),
};
