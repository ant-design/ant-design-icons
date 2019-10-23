
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/twotone/SnippetsTwoTone';

export default {
  name: 'IconSnippetsTwoTone',
  displayName: 'SnippetsTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SnippetsTwoToneSvg } },
      children
    ),
};
