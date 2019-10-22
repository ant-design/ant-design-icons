
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SelectOutlineSvg from '@ant-design/icons-svg/lib/outline/SelectOutline';

export default {
  name: 'Select',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SelectOutlineSvg } },
      children
    ),
};
