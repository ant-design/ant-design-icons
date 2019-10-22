
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePptOutlineSvg from '@ant-design/icons-svg/lib/outline/FilePptOutline';

export default {
  name: 'FilePpt',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePptOutlineSvg } },
      children
    ),
};
