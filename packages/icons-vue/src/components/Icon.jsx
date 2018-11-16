import {
  generate,
  getSecondaryColor,
  isIconDefinition,
  log,
  MiniMap,
  withSuffix,
} from '../utils'

const twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
}

const Icon = {
  name: 'AntdIcon',
  props: ['type', 'primaryColor', 'secondaryColor'],
  displayName: 'IconVue',
  definitions: new MiniMap(),
  data () {
    return {
      twoToneColorPalette,
    }
  },
  add (...icons) {
    icons.forEach((icon) => {
      Icon.definitions.set(withSuffix(icon.name, icon.theme), icon)
    })
  },
  clear () {
    Icon.definitions.clear()
  },
  get (key, colors = twoToneColorPalette) {
    if (key) {
      let target = Icon.definitions.get(key)
      if (target && typeof target.icon === 'function') {
        target = {
          ...target,
          icon: target.icon(colors.primaryColor, colors.secondaryColor),
        }
      }
      return target
    }
  },
  setTwoToneColors ({
    primaryColor,
    secondaryColor,
  }) {
    twoToneColorPalette.primaryColor = primaryColor
    twoToneColorPalette.secondaryColor =
      secondaryColor || getSecondaryColor(primaryColor)
  },
  getTwoToneColors () {
    return {
      ...twoToneColorPalette,
    }
  },
  render (h) {
    const {
      type,
      primaryColor,
      secondaryColor,
    } = this.$props

    let target
    let colors = twoToneColorPalette
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor),
      }
    }
    if (isIconDefinition(type)) {
      target = type
    } else if (typeof type === 'string') {
      target = Icon.get(type, colors)
      if (!target) {
        // log(`Could not find icon: ${type}`);
        return null
      }
    }
    if (!target) {
      log(`type should be string or icon definiton, but got ${type}`)
      return null
    }
    if (target && typeof target.icon === 'function') {
      target = {
        ...target,
        icon: target.icon(colors.primaryColor, colors.secondaryColor),
      }
    }
    return generate(h, target.icon, `svg-${target.name}`, {
      attrs: {
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true',
      },
      on: {
        ...this.$listeners,
      },
    })
  },
}

/* istanbul ignore next */
Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon)
}

export default Icon
