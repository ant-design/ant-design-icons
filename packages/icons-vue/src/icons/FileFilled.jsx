
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FileFillSvg from '@ant-design/icons-svg/lib/fill/FileFill';

export default {
  name: 'FileFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FileFillSvg } },
      children
    ),
};
