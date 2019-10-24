
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RightSquareFillSvg from '@ant-design/icons-svg/lib/fill/RightSquareFill';

export default {
  name: 'IconRightSquareFilled',
  displayName: 'RightSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RightSquareFillSvg } },
      children
    ),
};
