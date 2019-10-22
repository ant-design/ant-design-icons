
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReadOutlineSvg from '@ant-design/icons-svg/lib/outline/ReadOutline';

export default {
  name: 'Read',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReadOutlineSvg } },
      children
    ),
};
