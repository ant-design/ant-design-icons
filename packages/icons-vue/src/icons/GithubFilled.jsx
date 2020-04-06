// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GithubFilledSvg from '@ant-design/icons-svg/lib/asn/GithubFilled';

export default {
  name: 'IconGithubFilled',
  displayName: 'GithubFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: GithubFilledSvg } },
      children,
    ),
};