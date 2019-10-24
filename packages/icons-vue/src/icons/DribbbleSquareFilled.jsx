
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DribbbleSquareFillSvg from '@ant-design/icons-svg/lib/fill/DribbbleSquareFill';

export default {
  name: 'IconDribbbleSquareFilled',
  displayName: 'DribbbleSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleSquareFillSvg } },
      children
    ),
};
