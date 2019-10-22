
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RestFillSvg from '@ant-design/icons-svg/lib/fill/RestFill';

export default {
  name: 'RestFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RestFillSvg } },
      children
    ),
};
