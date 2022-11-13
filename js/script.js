function changeFlexDirectionSideA() {  
  const element = document.querySelector('.sideA');
  element.style['flex-direction'] = 'row'   
}

function resizeBox(boxName, size) {
  console.log('Chamou')
  const element = document.querySelector(boxName);
  element.style['flex-grow'] = size
}