
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownCircleOutlineSvg from '@ant-design/icons-svg/lib/outline/DownCircleOutline';

export default {
  name: 'IconDownCircle',
  displayName: 'DownCircle',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownCircleOutlineSvg } },
      children
    ),
};
