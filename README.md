# HTML \<Dialog\> tag

The \<dialog> tag creates a centered dialog box, and can be used to create a modal in your webpage.

An example of a simple \<dialog> tag can be seen below:

```html
<dialog open>Hello World</dialog>
```

The **open** tag ensures the dialog popup is visible to the user.

Of course, you can style the \<dialog> like any other html element. An example of a styled \<dialog> would be as follows:

HTML:

```html
<dialog open class="styled_dialog">Styled Dialog</dialog>
```

CSS:

```css
.styled_dialog {
    background-color: red;
    border: 3px solid black;
    border-radius: 5px;
}
```

We can also make the \<dialog> respond with javascript to appear at the click of a button:

HTML:

```html
<button type="button" id="showmodal">Show modal</button>
<dialog open id="modal">Pop-up modal</dialog>
```

JavaScript:

```javascript
const showmodal = document.GetElementById('showmodal');
const modal = document.GetElementById('modal');

showmodal.addEventListener('click', function() {
    modal.open = true;
});
```

The uses for the \<dialog> tag go far beyond this, but this should serve as a simple introduction to its functions.