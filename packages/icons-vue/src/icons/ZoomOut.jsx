
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ZoomOutOutlineSvg from '@ant-design/icons-svg/lib/outline/ZoomOutOutline';

export default {
  name: 'ZoomOut',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ZoomOutOutlineSvg } },
      children
    ),
};
