
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SkypeFillSvg from '@ant-design/icons-svg/lib/fill/SkypeFill';

export default {
  name: 'SkypeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SkypeFillSvg } },
      children
    ),
};
