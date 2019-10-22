
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckSquareFillSvg from '@ant-design/icons-svg/lib/fill/CheckSquareFill';

export default {
  name: 'CheckSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckSquareFillSvg } },
      children
    ),
};
