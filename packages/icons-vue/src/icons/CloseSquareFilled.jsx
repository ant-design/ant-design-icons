
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloseSquareFillSvg from '@ant-design/icons-svg/lib/fill/CloseSquareFill';

export default {
  name: 'IconCloseSquareFilled',
  displayName: 'CloseSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloseSquareFillSvg } },
      children
    ),
};
