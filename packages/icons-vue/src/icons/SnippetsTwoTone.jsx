// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SnippetsTwoTone';

export default {
  name: 'IconSnippetsTwoTone',
  displayName: 'SnippetsTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SnippetsTwoToneSvg } },
      children,
    ),
};