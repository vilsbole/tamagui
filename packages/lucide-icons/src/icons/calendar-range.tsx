import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import { IconProps } from '../IconProps'
import { themed } from '../themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Rect
        width="18"
        height="18"
        x="3"
        y="4"
        rx="2"
        ry="2"
        stroke={`${color}`}
      />
      <Line x1="16" x2="16" y1="2" y2="6" stroke={`${color}`} />
      <Line x1="8" x2="8" y1="2" y2="6" stroke={`${color}`} />
      <Line x1="3" x2="21" y1="10" y2="10" stroke={`${color}`} />
      <Path d="M17 14h-6" stroke={`${color}`} />
      <Path d="M13 18H7" stroke={`${color}`} />
      <Path d="M7 14h.01" stroke={`${color}`} />
      <Path d="M17 18h.01" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'CalendarRange'

export const CalendarRange = memo<IconProps>(themed(Icon))
