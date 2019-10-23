
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlusSquareFillSvg from '@ant-design/icons-svg/lib/fill/PlusSquareFill';

export default {
  name: 'IconPlusSquareFilled',
  displayName: 'PlusSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlusSquareFillSvg } },
      children
    ),
};
