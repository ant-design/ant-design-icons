
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import HomeFillSvg from '@ant-design/icons-svg/lib/fill/HomeFill';

export default {
  name: 'HomeFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: HomeFillSvg } },
      children
    ),
};
