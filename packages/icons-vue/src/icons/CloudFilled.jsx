
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import CloudFillSvg from '@ant-design/icons-svg/lib/fill/CloudFill';

export default {
  name: 'CloudFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: CloudFillSvg } },
      children
    ),
};
