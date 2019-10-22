
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import RetweetOutlineSvg from '@ant-design/icons-svg/lib/outline/RetweetOutline';

export default {
  name: 'Retweet',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: RetweetOutlineSvg } },
      children
    ),
};
