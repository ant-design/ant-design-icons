
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ReadFillSvg from '@ant-design/icons-svg/lib/fill/ReadFill';

export default {
  name: 'ReadFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ReadFillSvg } },
      children
    ),
};
