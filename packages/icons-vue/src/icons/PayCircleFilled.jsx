
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PayCircleFillSvg from '@ant-design/icons-svg/lib/fill/PayCircleFill';

export default {
  name: 'PayCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PayCircleFillSvg } },
      children
    ),
};
