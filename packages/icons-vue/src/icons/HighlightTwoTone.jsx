
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/twotone/HighlightTwoTone';

export default {
  name: 'IconHighlightTwoTone',
  displayName: 'HighlightTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HighlightTwoToneSvg } },
      children
    ),
};
