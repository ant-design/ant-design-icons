
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HighlightOutlineSvg from '@ant-design/icons-svg/lib/outline/HighlightOutline';

export default {
  name: 'Highlight',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HighlightOutlineSvg } },
      children
    ),
};
