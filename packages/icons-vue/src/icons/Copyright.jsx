
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CopyrightOutlineSvg from '@ant-design/icons-svg/lib/outline/CopyrightOutline';

export default {
  name: 'Copyright',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyrightOutlineSvg } },
      children
    ),
};
