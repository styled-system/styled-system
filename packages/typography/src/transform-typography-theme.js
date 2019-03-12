// EXPERIMENTAL
import Typography from 'typography'
import pick from 'lodash.pick'
import omit from 'lodash.omit'
import { tagNames } from './index'

const splitFontShorthand = font => {
  const parts = font.split(/[/\s]/)
  return parts
}

export default theme => {
  const typography = new Typography(theme)
  const styles = typography.toJSON()
  const root = {
    ...styles.html,
    ...styles.body,
  }
  const elements = pick(styles, tagNames)
  const omitStyles = [
    ...tagNames,
    'html',
    'body',
    ...Object.keys(styles).filter(key => /^[@*]/.test(key))
  ]
  const others = omit(styles, omitStyles)

  const config = {
    ...elements,
    body: root,
    ...others,
  }

  return config
}
