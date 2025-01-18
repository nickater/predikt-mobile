export type AdjustColorProps = {
  hex: string
  amount: number
  direction: 'lighter' | 'darker'
}

export function adjustColor(
  hex: string,
  amount: number,
  direction: 'lighter' | 'darker',
): string {
  if (direction === 'lighter') {
    return lightenHexColor(hex, amount)
  } else {
    return darkenHexColor(hex, amount)
  }
}

function lightenHexColor(hex, amount = 20) {
  // Remove the pound sign if it exists
  const color = hex.startsWith('#') ? hex.slice(1) : hex

  // Convert the color to RGB
  const num = parseInt(color, 16)

  // Extract RGB components
  let r = (num >> 16) + amount
  let g = ((num >> 8) & 0x00ff) + amount
  let b = (num & 0x0000ff) + amount

  // Ensure the values are within 0-255
  r = Math.min(255, r)
  g = Math.min(255, g)
  b = Math.min(255, b)

  // Convert back to hex and return
  const newColor = (r << 16) | (g << 8) | b
  return `#${newColor.toString(16).padStart(6, '0')}`
}

function darkenHexColor(hex, amount = 20) {
  // Remove the pound sign if it exists
  const color = hex.startsWith('#') ? hex.slice(1) : hex

  // Convert the color to RGB
  const num = parseInt(color, 16)

  // Extract RGB components
  let r = (num >> 16) - amount
  let g = ((num >> 8) & 0x00ff) - amount
  let b = (num & 0x0000ff) - amount

  // Ensure the values are within 0-255
  r = Math.max(0, r)
  g = Math.max(0, g)
  b = Math.max(0, b)

  // Convert back to hex and return
  const newColor = (r << 16) | (g << 8) | b
  return `#${newColor.toString(16).padStart(6, '0')}`
}
