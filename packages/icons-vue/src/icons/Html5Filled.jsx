
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Html5FillSvg from '@ant-design/icons-svg/lib/fill/Html5Fill';

export default {
  name: 'IconHtml5Filled',
  displayName: 'Html5Filled',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Html5FillSvg } },
      children
    ),
};
