
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import FundTwoToneSvg from '@ant-design/icons-svg/lib/twotone/FundTwoTone';

export default {
  name: 'FundTwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: FundTwoToneSvg } },
      children
    ),
};
