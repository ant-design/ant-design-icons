
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BuildFillSvg from '@ant-design/icons-svg/lib/fill/BuildFill';

export default {
  name: 'BuildFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BuildFillSvg } },
      children
    ),
};
