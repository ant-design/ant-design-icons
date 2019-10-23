
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DiffFillSvg from '@ant-design/icons-svg/lib/fill/DiffFill';

export default {
  name: 'IconDiffFilled',
  displayName: 'DiffFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DiffFillSvg } },
      children
    ),
};
