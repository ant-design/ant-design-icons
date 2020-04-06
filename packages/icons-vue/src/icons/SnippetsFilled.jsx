// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnippetsFilledSvg from '@ant-design/icons-svg/lib/asn/SnippetsFilled';

export default {
  name: 'IconSnippetsFilled',
  displayName: 'SnippetsFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SnippetsFilledSvg } },
      children,
    ),
};