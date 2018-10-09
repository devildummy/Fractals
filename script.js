const fieldAttr={
  'position':'relative',
  'width':'800px',
  'height':'800px',
  'background':'rgb(168, 168, 168)',
  'top':'100px',
  'left':'500px'
};
const positions ={};
const randomPosition = (max = parseInt(fieldAttr.width,10)) =>{
  return Math.floor(Math.random() * (max+1));
};
const createDots = () =>{
  $('#field').empty();
  for(let i=0; i<3;i++){
  const dotParam ={
    'position':'absolute',
    'width':'10px',
    'height':'10px',
    'top': randomPosition() + 'px',
    'left': randomPosition() + 'px',
    'background': 'black'
  };
  positions[i+'Y']=dotParam.top;
  positions[i+'X']=dotParam.left;
  $('<div></div>').css(dotParam).appendTo('#field');
}
};
const createRed = () =>{
  $('.red').remove();
  const dotParam ={
    'position':'absolute',
    'width':'5px',
    'height':'5px',
    'top': randomPosition() + 'px',
    'left': randomPosition() + 'px',
    'background': 'red'
  };
  positions.dotY=dotParam.top;
  positions.dotX=dotParam.left;
  $('<div></div>').css(dotParam).attr('class','red').appendTo('#field');
};
const chaos = () =>{
  const point = Math.floor(Math.random()*3);
  const dotParam ={
    'position':'absolute',
    'width':'2px',
    'height':'2px',
    'top': Math.floor((parseInt(positions.dotY)+parseInt(positions[point+'Y']))/2) + 'px',
    'left': Math.floor((parseInt(positions.dotX)+parseInt(positions[point+'X']))/2) + 'px',
    'background': 'red'
  };
  $('#counter').text(count);
  count++;
  positions.dotY = dotParam.top;
  positions.dotX = dotParam.left;
  $('<div></div>').css(dotParam).attr('class','red').appendTo('#field');
};
const createChaos = () =>{
  positions.flow = setInterval(chaos,10);
};

let count=0;

$('<div></div>').attr('id','field').appendTo('body');
$('#field').css(fieldAttr).click(createDots);
$('#makered').click(createRed);
$('#counter').click(createChaos);


