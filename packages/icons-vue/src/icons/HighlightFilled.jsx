
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HighlightFillSvg from '@ant-design/icons-svg/lib/fill/HighlightFill';

export default {
  name: 'IconHighlightFilled',
  displayName: 'HighlightFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HighlightFillSvg } },
      children
    ),
};
