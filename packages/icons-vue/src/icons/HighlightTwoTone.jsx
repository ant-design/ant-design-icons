// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone';

export default {
  name: 'IconHighlightTwoTone',
  displayName: 'HighlightTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HighlightTwoToneSvg } },
      children,
    ),
};