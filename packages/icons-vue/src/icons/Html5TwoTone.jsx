
// GENERATE BY ./scripts/generateIcons.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Html5TwoToneSvg from '@ant-design/icons-svg/lib/twotone/Html5TwoTone';

export default {
  name: 'IconHtml5TwoTone',
  displayName: 'Html5TwoTone',
  functional: true,
  render: (h, { data, children }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, icon: Html5TwoToneSvg } },
      children
    ),
};
