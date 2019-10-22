
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import BehanceCircleFillSvg from '@ant-design/icons-svg/lib/fill/BehanceCircleFill';

export default {
  name: 'BehanceCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: BehanceCircleFillSvg } },
      children
    ),
};
