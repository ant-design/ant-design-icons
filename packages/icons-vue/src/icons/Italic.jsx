
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ItalicOutlineSvg from '@ant-design/icons-svg/lib/outline/ItalicOutline';

export default {
  name: 'IconItalic',
  displayName: 'Italic',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ItalicOutlineSvg } },
      children
    ),
};
