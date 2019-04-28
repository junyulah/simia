const log = console.log.bind(console); // eslint-disable-line
const {
  attach
} = require('../src/platform');
const {
  getFrame,
  // deserializeFrame,
  shapeUtil
} = require('../src/frame')();
const {
  defShape,
  centerXIn,
  centerYIn,
  below,
  box,
  canvasWidth,
  after,
} = shapeUtil;

/*
canvas.addEventListener('click', (e) => {
  const {
    x,
    y
  } = getRelativeCoordinates(e, canvas);
});
*/

const header = box(() => {
  const hb = defShape({
    shapeType: 'rect',
    x: 0,
    y: 0,
    w: canvasWidth,
    h: 45,
    color: 'blue'
  });

  const title = defShape({
    shapeType: 'text',
    x: centerXIn(0, 100),
    y: centerYIn(0, 20),
    w: 100,
    h: 20,
    text: 'debug for simia',
    color: 'white'
  }, [hb]);

  return [
    hb, title
  ];
});

const content = box(() => {
  return [
    after(below(header, {
      shapeType: 'rect',
      w: 100,
      h: 45,
      color: 'black'
    }), {
      shapeType: 'text',
      w: 100,
      h: 20,
      text: 'hello world!'
    })
  ];
});

const canvas = attach(document.getElementById('app'));
const frame = getFrame(canvas, [header, content]);
frame.draw();
frame.updateShapeExp(1, 'color', 'red');
