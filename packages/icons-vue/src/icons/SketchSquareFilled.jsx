
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SketchSquareFillSvg from '@ant-design/icons-svg/lib/fill/SketchSquareFill';

export default {
  name: 'SketchSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SketchSquareFillSvg } },
      children
    ),
};
