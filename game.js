import $ from 'jquery';
import './styles.css';
import { Grid } from './grid';
import { Snake } from './snake';

const width = 8
const height = 8
const initialLength = 4

const snake = new Snake(initialLength, 2, 3, "N")
const grid = new Grid(width, height, snake);
console.log(grid)
grid.create();

// Creation of snake
// inital length
// head
// body
