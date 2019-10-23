
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import IssuesCloseOutlineSvg from '@ant-design/icons-svg/lib/outline/IssuesCloseOutline';

export default {
  name: 'IconIssuesClose',
  displayName: 'IssuesClose',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: IssuesCloseOutlineSvg } },
      children
    ),
};
