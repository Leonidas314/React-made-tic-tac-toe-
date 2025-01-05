First at all we must to setup the project file's structure (framework).

Using vite, do:

npm create vite@latest ->Project name ->Package name (optional)
->Select framework (React here) -> Select lenguage (JavaScript+SWC)

The project start creating a game board by 3x3, this is an 9 size array rendered by an Square component
for each element of the array, this squares are on an section styled by grid css property. In this case 
we are using the index of the array element just like the key identifier.

The initial state of elements is null, for this useState(Array(9).fill(null))...

Conditional Rendering:

It is possible by using the trinary operator to stablish a determined className component.
In the line 7 we have :
const Square =({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ?'is-selected' : ''}`
  ...
  <div className = {className}>
  ...
  }
This mean that the Square component evaluates the `isSelected` property, if this one is true the className will be `square is-selected`, if not just `square`, and this will be affected by css styled
in diferent ways.
