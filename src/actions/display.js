export const INCREMENT_MOVES = 'INCREMENT_MOVES'
export const RESET_DISPLAY = 'RESET_DISPLAY'
export const TICK = 'TICK'


export const incrementMoves = () => ({
  type: INCREMENT_MOVES
})

export const resetDisplay = () => ({
  type: RESET_DISPLAY
})

export const tick = () => ({
  type: TICK
})
