
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import DingtalkCircleFillSvg from '@ant-design/icons-svg/lib/fill/DingtalkCircleFill';

export default {
  name: 'IconDingtalkCircleFilled',
  displayName: 'DingtalkCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: DingtalkCircleFillSvg } },
      children
    ),
};
