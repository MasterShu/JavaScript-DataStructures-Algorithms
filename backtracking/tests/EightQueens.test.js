import { EightQueens } from '../EightQueens'
import test from 'ava'

test('Create Eight Queens instance', t => {
  const eightQueens = new EightQueens()
  t.snapshot(eightQueens)
})

test('Test the solve method of Eight Queens.', t => {
  const eightQueens = new EightQueens()
  eightQueens.solveEightQueens()
  t.is(eightQueens.result.length, 8, 'The solved is incorrectly!')
})
