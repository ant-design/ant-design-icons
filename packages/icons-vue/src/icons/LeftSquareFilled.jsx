
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LeftSquareFillSvg from '@ant-design/icons-svg/lib/fill/LeftSquareFill';

export default {
  name: 'IconLeftSquareFilled',
  displayName: 'LeftSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LeftSquareFillSvg } },
      children
    ),
};
