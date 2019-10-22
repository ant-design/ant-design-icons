
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CheckCircleFillSvg from '@ant-design/icons-svg/lib/fill/CheckCircleFill';

export default {
  name: 'CheckCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CheckCircleFillSvg } },
      children
    ),
};
