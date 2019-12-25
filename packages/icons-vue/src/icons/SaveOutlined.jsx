// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/AntdIcon';
import SaveOutlinedSvg from '@ant-design/icons-svg/lib/asn/SaveOutlined';

export default {
  name: 'IconSaveOutlined',
  displayName: 'SaveOutlined',
  functional: true,
  props: [ ...Icon.props ],
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SaveOutlinedSvg } },
      children,
    ),
};