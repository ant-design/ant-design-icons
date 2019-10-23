
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SlackSquareFillSvg from '@ant-design/icons-svg/lib/fill/SlackSquareFill';

export default {
  name: 'IconSlackSquareFilled',
  displayName: 'SlackSquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: SlackSquareFillSvg } },
      children
    ),
};
