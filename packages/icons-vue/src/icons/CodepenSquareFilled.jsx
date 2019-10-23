
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CodepenSquareFillSvg from '@ant-design/icons-svg/lib/fill/CodepenSquareFill';

export default {
  name: 'IconCodepenSquareFilled',
  displayName: 'CodepenSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CodepenSquareFillSvg } },
      children
    ),
};
