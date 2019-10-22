
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import GithubFillSvg from '@ant-design/icons-svg/lib/fill/GithubFill';

export default {
  name: 'GithubFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: GithubFillSvg } },
      children
    ),
};
