
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import PlaySquareFillSvg from '@ant-design/icons-svg/lib/fill/PlaySquareFill';

export default {
  name: 'IconPlaySquareFilled',
  displayName: 'PlaySquareFilled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: PlaySquareFillSvg } },
      children
    ),
};
