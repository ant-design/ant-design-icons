
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PaperClipOutlineSvg from '@ant-design/icons-svg/lib/outline/PaperClipOutline';

export default {
  name: 'IconPaperClip',
  displayName: 'PaperClip',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PaperClipOutlineSvg } },
      children
    ),
};
