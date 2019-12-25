// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled';

export default {
  name: 'IconSketchSquareFilled',
  displayName: 'SketchSquareFilled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SketchSquareFilledSvg } },
      children,
    ),
};