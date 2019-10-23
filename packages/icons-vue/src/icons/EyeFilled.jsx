
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import EyeFillSvg from '@ant-design/icons-svg/lib/fill/EyeFill';

export default {
  name: 'IconEyeFilled',
  displayName: 'EyeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: EyeFillSvg } },
      children
    ),
};
