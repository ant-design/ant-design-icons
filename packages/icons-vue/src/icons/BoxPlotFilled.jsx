
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BoxPlotFillSvg from '@ant-design/icons-svg/lib/fill/BoxPlotFill';

export default {
  name: 'IconBoxPlotFilled',
  displayName: 'BoxPlotFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BoxPlotFillSvg } },
      children
    ),
};
