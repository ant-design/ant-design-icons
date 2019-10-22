
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LinkedinOutlineSvg from '@ant-design/icons-svg/lib/outline/LinkedinOutline';

export default {
  name: 'Linkedin',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LinkedinOutlineSvg } },
      children
    ),
};
