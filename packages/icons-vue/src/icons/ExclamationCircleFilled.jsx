
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import ExclamationCircleFillSvg from '@ant-design/icons-svg/lib/fill/ExclamationCircleFill';

export default {
  name: 'IconExclamationCircleFilled',
  displayName: 'ExclamationCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: ExclamationCircleFillSvg } },
      children
    ),
};
