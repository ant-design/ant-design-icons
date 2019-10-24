
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilterFillSvg from '@ant-design/icons-svg/lib/fill/FilterFill';

export default {
  name: 'IconFilterFilled',
  displayName: 'FilterFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilterFillSvg } },
      children
    ),
};
