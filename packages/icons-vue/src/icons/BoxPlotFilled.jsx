// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled';

export default {
  name: 'IconBoxPlotFilled',
  displayName: 'BoxPlotFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BoxPlotFilledSvg } },
      children,
    ),
};