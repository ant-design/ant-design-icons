
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnippetsOutlineSvg from '@ant-design/icons-svg/lib/outline/SnippetsOutline';

export default {
  name: 'Snippets',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SnippetsOutlineSvg } },
      children
    ),
};
