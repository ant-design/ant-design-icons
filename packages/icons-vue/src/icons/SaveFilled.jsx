
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SaveFillSvg from '@ant-design/icons-svg/lib/fill/SaveFill';

export default {
  name: 'SaveFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SaveFillSvg } },
      children
    ),
};
