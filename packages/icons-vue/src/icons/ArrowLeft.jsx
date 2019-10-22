
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ArrowLeftOutlineSvg from '@ant-design/icons-svg/lib/outline/ArrowLeftOutline';

export default {
  name: 'ArrowLeft',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ArrowLeftOutlineSvg } },
      children
    ),
};
