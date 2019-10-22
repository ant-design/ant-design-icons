
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Loading3QuartersOutlineSvg from '@ant-design/icons-svg/lib/outline/Loading3QuartersOutline';

export default {
  name: 'Loading3Quarters',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Loading3QuartersOutlineSvg } },
      children
    ),
};
