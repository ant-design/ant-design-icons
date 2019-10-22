
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FilePptFillSvg from '@ant-design/icons-svg/lib/fill/FilePptFill';

export default {
  name: 'FilePptFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FilePptFillSvg } },
      children
    ),
};
