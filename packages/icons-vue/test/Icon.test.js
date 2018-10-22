import Vue from 'vue'
import { AntDesignOutline, TwitterOutline } from '@ant-design/icons';
import { mount } from '@vue/test-utils'
import Icon from '../src/components/Icon';

Icon.add(AntDesignOutline, TwitterOutline);

// function mount(props) {
//   const component = renderer.create(<Icon {...props} />);
//   return component.toJSON();
// }

describe('Vue AntdIcon Component', () => {
  it('should create SVG element.', () => {
    const iconProps = {
      props: {
        type: 'ant-design-o',
        hello: 'world'
      },
      style: {
        fontSize: '3rem'
      },
      class: 'my-icon',
      attrs: { hello: 'world' },
    }
    const icon = mount({
      render(){
        return <Icon {...iconProps} />
      }
    });
    expect(icon).toMatchSnapshot();
  });

  it('should allow explicit import.', () => {
    const icon = mount(Icon, {propsData: {type : TwitterOutline}})
    expect(typeof icon.find('path').vnode.data.attrs.d).toBe('string');
  });

  it('should render null, when the type is invalid.', () => {
    const iconWithObjectTypeProp = mount(Icon, {propsData: {type : { invalid: true }}});
    expect(iconWithObjectTypeProp.isEmpty()).toBe(true);

    const iconWithStringTypeProp = mount(Icon, {propsData: {type : 'Later is better than never.'}})
    expect(iconWithStringTypeProp.isEmpty()).toBe(true);
  });
});
