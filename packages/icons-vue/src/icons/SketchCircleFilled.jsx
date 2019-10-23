
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SketchCircleFillSvg from '@ant-design/icons-svg/lib/fill/SketchCircleFill';

export default {
  name: 'IconSketchCircleFilled',
  displayName: 'SketchCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SketchCircleFillSvg } },
      children
    ),
};
