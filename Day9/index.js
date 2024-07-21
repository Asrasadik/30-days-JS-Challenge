const btnId = document.getElementById('btnId');
const removebtnId = document.getElementById('removeBtnId');
const modifyBtnId = document.getElementById('modifyBtnId');
const textId = document.getElementById('mainTextId');
const activityId = document.getElementsByClassName('activity')[0];
const items = document.getElementById('listId');
const imageId = document.getElementById('imageId');
let count = 3;
//method to complete button
const onComplete = (textId, activityId) => {
	btnId.className = 'btn2';
	console.log('yes');
	count += 1;
	//document.getElementById('mainTextId').innerText = 'Completed';
	textId.innerText = 'Completed';
	activityId.style.backgroundColor = '#D6F6DD';
	const newDiv = document.createElement('div');
	newDiv.className = 'activity2';
	newDiv.style.backgroundColor = '#B9CFD4';
	newDiv.style.width = '30%';
	newDiv.innerHTML = 'Activity' + count;
	document.body.appendChild(newDiv); //OR document.getElementsByTagName('body')[0];
	//list item
	const newListItem = document.createElement('li');
	newListItem.textContent = 'Task ' + count;
	newListItem.style.backgroundColor = '#CEE0DC';
	items.appendChild(newListItem);
	imageId.src =
		'https://i.pinimg.com/736x/ae/32/e5/ae32e5595d8dbfac1cadac187ac6d45a.jpg';
};
const onRemoveClick = () => {
	if (count >= 4) {
		count--;
		//remove last element in body
		if (document.body.lastElementChild) {
			document.body.removeChild(document.body.lastElementChild);
		}
		if (items.lastElementChild) {
			items.removeChild(items.lastElementChild);
		}
		imageId.src =
			'https://i.pinimg.com/474x/d3/3c/c6/d33cc6d3b1ee12c0512a4d5a90fb6382.jpg';
	}
};
onMouseEnter = () => {
	imageId.style.border = '1px solid';
	imageId.style.borderColor = '#EFE6DD';
};
onMouseLeave = () => {
	imageId.style.border = 'none';
};
//modify logic
onModifyClick = () => {};
btnId.addEventListener('click', () => onComplete(textId, activityId));
removebtnId.addEventListener('click', onRemoveClick);
modifyBtnId.addEventListener('click', onModifyClick);
imageId.addEventListener('mouseenter', onMouseEnter);
imageId.addEventListener('mouseleave', onMouseLeave);
