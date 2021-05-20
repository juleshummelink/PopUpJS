class PopUp{
	#popUpContainer;
	#popUpBox;
	#popUpTitle;
	#popUpContent;
	#popUpDescription;
	#popUpButtons;
	#zindex;
	constructor(zindex, backgroundColor){
		this.#zindex = zindex;		//Define zindex var
		this.#createElements();		//Call the function that creates all the elements
	}

	#createElements(){
		this.#popUpContainer = document.createElement('div');		//Create the container
		this.#popUpContainer.classList.add('popUpContainer');		//Add class to the container
		this.#popUpContainer.style.zIndex = this.#zindex;			//Set the zindex
		document.body.appendChild(this.#popUpContainer);			//Append the container to documents body

		this.#popUpBox = document.createElement('div');				//Create the box
		this.#popUpBox.classList.add('popUpBox');					//Add class to box
		this.#popUpContainer.appendChild(this.#popUpBox);			//Append the box to the container

		this.#popUpTitle = document.createElement('span');			//Create the title element
		this.#popUpTitle.classList.add('popUpTitle');				//Add class to the title
		this.#popUpBox.appendChild(this.#popUpTitle);				//Append the title to the container

		this.#popUpContent = document.createElement('div');			//Create content box
		this.#popUpContent.classList.add('popUpContent');			//Add class to content box
		this.#popUpBox.appendChild(this.#popUpContent);				//Append the box to the popUpBox

		this.#popUpDescription = document.createElement('span');	//Create description text
		this.#popUpDescription.classList.add('popUpDescription');	//Add class to description text
		this.#popUpContent.appendChild(this.#popUpDescription);		//Append the text to the content box

		this.#popUpButtons = document.createElement('div');			//Create the container that holds the buttons
		this.#popUpButtons.classList.add('popUpButtons');			//Add class to the container
		this.#popUpBox.appendChild(this.#popUpButtons);				//Append the button container to the popUpBox
	}

	setTitle(title){
		this.#popUpTitle.innerHTML = title;
	}

	setDescription(description){
		this.#popUpDescription.innerHTML = description;
	}

	addButton(text, bgColor, textColor, action){
		let button = document.createElement('span');				//Create a button element
		button.classList.add('popUpButton');						//Add class to button
		button.innerHTML = text;									//Add text to the button
		button.style.backgroundColor = bgColor;						//Add color to the background
		button.style.color = textColor;								//Add the text color
		button.addEventListener('click', action);					//Add the function to the button
		this.#popUpButtons.appendChild(button);					//Add the button to the button container

	}

	show(){
		let popUp = this.#popUpContainer;
		popUp.style.display = 'flex';
		setTimeout(function(){
			popUp.classList.add('showPopUp');
		}, 10);
	}

	close(){
		let popUp = this.#popUpContainer;
		popUp.classList.remove('showPopUp');
		setTimeout(function(){
			popUp.style.display = 'none';
		}, 500);
	}

	remove(){
		this.#popUpContainer.remove();
	}

	hide(){

	}
}