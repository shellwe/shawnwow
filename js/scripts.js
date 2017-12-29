var leftBrain = document.getElementById('left-side');
var rightBrain = document.getElementById('right-side');

expandBrainLeft = () => {
  leftBrain.classList.toggle('expanded');
  leftBrain.classList.remove('hidden');
  rightBrain.classList.remove('expanded');
  rightBrain.classList.toggle('hidden');
  if(leftBrain.classList.contains('expanded')){
    rightBrain.classList.remove('normalize');
    leftBrain.classList.remove('normalize');
    rightBrain.classList.add('shrink');
  } else {
    rightBrain.classList.remove('shrink');
    leftBrain.classList.remove('shrink');
    rightBrain.classList.add('normalize');
    leftBrain.classList.add('normalize');
  }
}

expandBrainRight = () => {
  rightBrain.classList.toggle('expanded');
  rightBrain.classList.remove('hidden');

  leftBrain.classList.remove('expanded');
  leftBrain.classList.toggle('hidden');

  if(rightBrain.classList.contains('expanded')){
    rightBrain.classList.remove('normalize');
    leftBrain.classList.remove('normalize');
    leftBrain.classList.add('shrink');
  } else {
    leftBrain.classList.remove('shrink');
    rightBrain.classList.remove('shrink');
    rightBrain.classList.add('normalize');
    leftBrain.classList.add('normalize');
  }
}