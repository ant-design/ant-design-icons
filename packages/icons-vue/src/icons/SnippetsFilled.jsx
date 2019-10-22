
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SnippetsFillSvg from '@ant-design/icons-svg/lib/fill/SnippetsFill';

export default {
  name: 'SnippetsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SnippetsFillSvg } },
      children
    ),
};
