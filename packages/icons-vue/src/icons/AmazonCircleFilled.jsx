
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AmazonCircleFillSvg from '@ant-design/icons-svg/lib/fill/AmazonCircleFill';

export default {
  name: 'IconAmazonCircleFilled',
  displayName: 'AmazonCircleFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AmazonCircleFillSvg } },
      children
    ),
};
