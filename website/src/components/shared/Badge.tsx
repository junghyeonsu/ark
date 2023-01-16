import { HTMLPandaProps, panda } from '@/panda/jsx'
import { badge } from '@/panda/recipes'

export const Badge = (props: HTMLPandaProps<'div'>) => {
  return <panda.div className={badge()} {...props} />
}