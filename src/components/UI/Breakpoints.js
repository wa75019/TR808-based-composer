const size = {
    xs: '576px',
    sm: '856px',
    sm2: '756px',
    lg: '1200px'
   }
const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    sm2: `(min-width: ${size.sm2})`,
    lg: `(min-width: ${size.lg})`
   }

export default {size, device}