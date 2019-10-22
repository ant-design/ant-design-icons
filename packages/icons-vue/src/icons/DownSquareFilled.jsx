
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DownSquareFillSvg from '@ant-design/icons-svg/lib/fill/DownSquareFill';

export default {
  name: 'DownSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DownSquareFillSvg } },
      children
    ),
};
