const dragItems = document.querySelectorAll('.drag-item');
let dragSrcElement = null;

function handleDragStart(event) {
  dragSrcElement = this;
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(event) {
  if (event.preventDefault) {
    event.preventDefault(); 
  }
  this.classList.add('drag-over');
  event.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(event) {
  this.classList.add('drag-over');
}

function handleDragLeave(event) {
  this.classList.remove('drag-over');
}

function handleDrop(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }
  if (dragSrcElement !== this) {
    dragSrcElement.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }
  return false;
}

function handleDragEnd(event) {
  dragItems.forEach(item => item.classList.remove('drag-over'));
}

dragItems.forEach(item => {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragenter', handleDragEnter);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('drop', handleDrop);
  item.addEventListener('dragend', handleDragEnd);
});