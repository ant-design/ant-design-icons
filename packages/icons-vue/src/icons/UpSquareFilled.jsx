
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import UpSquareFillSvg from '@ant-design/icons-svg/lib/fill/UpSquareFill';

export default {
  name: 'UpSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: UpSquareFillSvg } },
      children
    ),
};
