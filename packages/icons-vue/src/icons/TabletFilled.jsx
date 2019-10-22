
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TabletFillSvg from '@ant-design/icons-svg/lib/fill/TabletFill';

export default {
  name: 'TabletFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TabletFillSvg } },
      children
    ),
};
