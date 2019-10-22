
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import AmazonSquareFillSvg from '@ant-design/icons-svg/lib/fill/AmazonSquareFill';

export default {
  name: 'AmazonSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: AmazonSquareFillSvg } },
      children
    ),
};
