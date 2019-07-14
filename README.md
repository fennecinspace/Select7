# Select7

a lightweight multi-selector, in vanilla javascript.
<br>easy to use. easy to modify.<br>
<div style="text-align: center;">
<img src="preview/img1.png" style="width:500px;"><br>
<img src="preview/img2.png" style="width:500px;"><br>
</div>

## Getting Started

### Integration

Download the `select7.css` and `select7.js` and add them to the head of your html :

```html  
<link rel="stylesheet" href="select7.css">
<script type="text/javascript" src="select7.js"></script>
```

Past the following into your html, and change `your_id` to whatever ID you want to use, to get the selected data :

```html
<div id="your_id" class="select7_container">
    <div class="select7_arrow">&#9662;</div>
    <div class="select7_placeholder">Meme Review</div>
    <select class="select7_select" onchange="Select7.add(this, event);">
        <option class="select7_hide" value="filler"></option>
        <option value="option1">Hello World</option>
        <option value="option2">Yes Mate</option>
        <option value="option3">Ma Dude</option>
    </select>
    <div class="select7_items"></div>
</div>
```

Leave the first option unchanged

```html
<option class="select7_hide" value="filler"></option>
```

And add you options instead of :

```html
<option value="option1">Hello World</option>
<option value="option2">Yes Mate</option>
<option value="option3">Ma Dude</option>
```

### placeholder

You can modify the text in the following tag to add a placeholder:

```html
<div class="select7_placeholder">Meme Review</div>
```

Or you can simply delete it, if you don't need one.

### Getting Selected Data

#### You can get the texts and the values

```javascript
Select7.get('your_id');
```

which, in case all the three options from the demo above were selected, will return :

```javascript
[
    {
        "text": "Yes Mate",
        "value": "option2"
    },
    {
        "text": "Ma Dude",
        "value": "option3"
    },
    {
        "text": "Hello World",
        "value": "option1"
    }
]
```

#### You can get only the values

```javascript
Select7.get('your_id','value');
```

which, in case all the three options from the demo above were selected, will return :

```javascript
["option2", "option3", "option1"]
```

#### You can get only the texts

```javascript
Select7.get('your_id','text');
```

which, in case all the three options from the demo above were selected, will return :

```javascript
["Yes Mate", "Ma Dude", "Hello World"]
```

PS: this is not a huge project or anything, this is just something that i created because i didn't want to use any jQuery, and because i didn't find what i was looking for in other libs, don't hesitate to improve my lousy code !
