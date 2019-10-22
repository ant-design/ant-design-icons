
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BookFillSvg from '@ant-design/icons-svg/lib/fill/BookFill';

export default {
  name: 'BookFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BookFillSvg } },
      children
    ),
};
