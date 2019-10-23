
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QqSquareFillSvg from '@ant-design/icons-svg/lib/fill/QqSquareFill';

export default {
  name: 'IconQqSquareFilled',
  displayName: 'QqSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QqSquareFillSvg } },
      children
    ),
};
