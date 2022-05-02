import $ from 'jquery';
import _ from 'lodash'

class Grid {
  constructor(width, height, snake) {
    this.width = width
    this.height = height
    this.snake = snake
  }

  create = () => {
    for (let y = 0; y < this.height; y = y + 1) {
      $("#game").append(`<div id='row-${y}' class='row'></div>`)
      for (let x = 0; x < this.width; x = x + 1) {
        const isHead = this.snake.snakeBody[0].x === x && this.snake.snakeBody[0].y === y
        const tail = _.tail(this.snake.snakeBody)
        const isBody = _.filter(tail, cell => cell.x === x && cell.y === y).length > 0
        const headClass = isHead ? 'head' : ''
        const bodyClass = isBody ? 'body' : ''
        $(`#row-${y}`).append(`<div id='cell-${x}' class='cell ${headClass} ${bodyClass}'>${x},${y}</div>`)
      }
    }
  }

}

export { Grid }



