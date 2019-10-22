
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GooglePlusSquareFillSvg from '@ant-design/icons-svg/lib/fill/GooglePlusSquareFill';

export default {
  name: 'GooglePlusSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GooglePlusSquareFillSvg } },
      children
    ),
};
