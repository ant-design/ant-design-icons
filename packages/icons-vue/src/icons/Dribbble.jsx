
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DribbbleOutlineSvg from '@ant-design/icons-svg/lib/outline/DribbbleOutline';

export default {
  name: 'Dribbble',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DribbbleOutlineSvg } },
      children
    ),
};
