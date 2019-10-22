
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import QqCircleFillSvg from '@ant-design/icons-svg/lib/fill/QqCircleFill';

export default {
  name: 'QqCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: QqCircleFillSvg } },
      children
    ),
};
