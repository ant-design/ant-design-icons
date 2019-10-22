
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BugFillSvg from '@ant-design/icons-svg/lib/fill/BugFill';

export default {
  name: 'BugFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BugFillSvg } },
      children
    ),
};
