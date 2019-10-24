
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AppleFillSvg from '@ant-design/icons-svg/lib/fill/AppleFill';

export default {
  name: 'IconAppleFilled',
  displayName: 'AppleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AppleFillSvg } },
      children
    ),
};
