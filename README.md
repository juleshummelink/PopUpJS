# PopUpJS
Create nice looking mobile friendly PopUp's easily with just a few lines of code

![PopUpJS in action!](popUp.gif?raw=true)

## How to use
### Add the scripts to your html file
Download the JavaScript and CSS script and link them in the ```<head>``` of your code
```
<head>
  ...
  <link rel="stylesheet" type="text/css" href="popUp.css">
  <script type="text/javascript" src="popUp.js"></script>
</head>
```
### Create a simple PopUp
Create a PopUp object.
```
let popUp = new PopUp(0);
```
The 0 defines the ```z-index``` of the PopUp elements. Change if required.

Set the title of the PopUp
```
popUp.setTitle('My New PopUp');
```
Now, set the description (main text of the PopUp)
```
popUp.setDescription('This is a simple PopUp made with PopUpJS.');
```
Last but not least, add a button that closes the PopUp
The ```.addButton``` takes 4 parameters:
- ```text``` : The text displayed in the button.
- ```bgColor``` : The background color of the button.
- ```textColor``` : The text color of the button.
- ```action``` : function that will run when the button is clicked.
```
popUp.addButton('OK', 'green', 'white', function(){
  popUp.close();
});
```
Now show the PopUp
```
popUp.show();
```

## All methods of PopUp object
### ```.show()```
Shows the PopUp.
### ```.close()```
Closes the PopUp.
### ```.setTitle(title)```
- ```title``` : Text that will display as title of the PopUp.
This will set the title of the PopUp.
### ```.setDescription(description)```
- ```description``` : Main text of the PopUp.
This will set the description text.
### ```.addButton(text, bgColor, textColor, action)```
- ```text``` : The text displayed in the button.
- ```bgColor``` : The background color of the button.
- ```textColor``` : The text color of the button.
- ```action``` : function that will run when the button is clicked.
This will add a clickable button to the PopUp. Multiple buttons can be added

### ```.remove()```
Removes all PopUp elements from the body. This PopUp object CANNOT be used again.

## More customization
You can always change the popUp.css to make the PopUp exactly as you like
