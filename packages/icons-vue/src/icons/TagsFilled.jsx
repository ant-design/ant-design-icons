
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import TagsFillSvg from '@ant-design/icons-svg/lib/fill/TagsFill';

export default {
  name: 'IconTagsFilled',
  displayName: 'TagsFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: TagsFillSvg } },
      children
    ),
};
