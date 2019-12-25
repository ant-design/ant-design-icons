// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled';

export default {
  name: 'IconHtml5Filled',
  displayName: 'Html5Filled',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: Html5FilledSvg } },
      children,
    ),
};