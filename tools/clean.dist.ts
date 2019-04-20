import { clean } from 'aria-fs'

Promise.all([ clean('dist'), clean('.cache') ])