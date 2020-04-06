// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GitlabFilledSvg from '@ant-design/icons-svg/lib/asn/GitlabFilled';

export default {
  name: 'IconGitlabFilled',
  displayName: 'GitlabFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GitlabFilledSvg } },
      children,
    ),
};