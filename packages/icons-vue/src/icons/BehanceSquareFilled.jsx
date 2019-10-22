
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BehanceSquareFillSvg from '@ant-design/icons-svg/lib/fill/BehanceSquareFill';

export default {
  name: 'BehanceSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceSquareFillSvg } },
      children
    ),
};
