
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodeFillSvg from '@ant-design/icons-svg/lib/fill/CodeFill';

export default {
  name: 'CodeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodeFillSvg } },
      children
    ),
};
