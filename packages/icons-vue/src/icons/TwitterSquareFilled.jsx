
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TwitterSquareFillSvg from '@ant-design/icons-svg/lib/fill/TwitterSquareFill';

export default {
  name: 'TwitterSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TwitterSquareFillSvg } },
      children
    ),
};
