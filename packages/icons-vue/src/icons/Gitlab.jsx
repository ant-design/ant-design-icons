
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GitlabOutlineSvg from '@ant-design/icons-svg/lib/outline/GitlabOutline';

export default {
  name: 'IconGitlab',
  displayName: 'Gitlab',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GitlabOutlineSvg } },
      children
    ),
};
