
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SketchOutlineSvg from '@ant-design/icons-svg/lib/outline/SketchOutline';

export default {
  name: 'Sketch',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SketchOutlineSvg } },
      children
    ),
};
