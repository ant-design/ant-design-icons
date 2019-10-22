
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePdfOutlineSvg from '@ant-design/icons-svg/lib/outline/FilePdfOutline';

export default {
  name: 'FilePdf',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePdfOutlineSvg } },
      children
    ),
};
