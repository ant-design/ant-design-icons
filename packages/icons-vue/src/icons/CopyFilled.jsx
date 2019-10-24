
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CopyFillSvg from '@ant-design/icons-svg/lib/fill/CopyFill';

export default {
  name: 'IconCopyFilled',
  displayName: 'CopyFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyFillSvg } },
      children
    ),
};
