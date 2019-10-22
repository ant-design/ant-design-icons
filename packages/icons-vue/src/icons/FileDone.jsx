
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileDoneOutlineSvg from '@ant-design/icons-svg/lib/outline/FileDoneOutline';

export default {
  name: 'FileDone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileDoneOutlineSvg } },
      children
    ),
};
