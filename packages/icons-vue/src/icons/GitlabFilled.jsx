
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GitlabFillSvg from '@ant-design/icons-svg/lib/fill/GitlabFill';

export default {
  name: 'IconGitlabFilled',
  displayName: 'GitlabFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GitlabFillSvg } },
      children
    ),
};
