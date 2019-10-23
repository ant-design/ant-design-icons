
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FilterTwoTone';

export default {
  name: 'IconFilterTwoTone',
  displayName: 'FilterTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilterTwoToneSvg } },
      children
    ),
};
