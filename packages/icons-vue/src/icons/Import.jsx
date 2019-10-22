
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ImportOutlineSvg from '@ant-design/icons-svg/lib/outline/ImportOutline';

export default {
  name: 'Import',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ImportOutlineSvg } },
      children
    ),
};
