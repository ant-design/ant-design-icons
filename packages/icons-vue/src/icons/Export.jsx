
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExportOutlineSvg from '@ant-design/icons-svg/lib/outline/ExportOutline';

export default {
  name: 'Export',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExportOutlineSvg } },
      children
    ),
};
