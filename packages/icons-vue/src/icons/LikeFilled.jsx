
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import LikeFillSvg from '@ant-design/icons-svg/lib/fill/LikeFill';

export default {
  name: 'LikeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: LikeFillSvg } },
      children
    ),
};
