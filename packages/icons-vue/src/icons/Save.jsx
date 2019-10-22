
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SaveOutlineSvg from '@ant-design/icons-svg/lib/outline/SaveOutline';

export default {
  name: 'Save',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SaveOutlineSvg } },
      children
    ),
};
