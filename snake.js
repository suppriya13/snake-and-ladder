import _ from 'lodash'
import { Block } from './block'

class Snake {
  constructor(length, initialXPos, initialYPos, direction) {
    this.length = length
    this.initialXPos = initialXPos
    this.initialYPos = initialYPos
    this.direction = direction
    this.snakeBody = this.createSnakeBody()
  }

  getOppositeDirection = (direction) => {
    const oppositeDirection = {
      'N': 'S',
      'S': 'N',
      'E': 'W',
      'W': 'E'
    }
    return oppositeDirection[direction]
  }

  createSnakeBody = () => {
    const head = new Block(this.initialXPos, this.initialYPos)
    const bodySteps = _.range(1, this.length)
    const oppositeDirection = this.getOppositeDirection(this.direction)
    const body = _.map(bodySteps,
      step => head.nextCell(oppositeDirection, step))
    return [head, ...body]
  }
}

export { Snake }