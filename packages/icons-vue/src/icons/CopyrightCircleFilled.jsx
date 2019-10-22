
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CopyrightCircleFillSvg from '@ant-design/icons-svg/lib/fill/CopyrightCircleFill';

export default {
  name: 'CopyrightCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CopyrightCircleFillSvg } },
      children
    ),
};
