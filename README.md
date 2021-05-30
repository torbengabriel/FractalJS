# FractalJS
Do you know that too, you spend hours looking for the right red for your headline and ponder forever whether it should be 16, 17 or 20 pixels, until you finally decide on the golden middle of 16,725?

If you want every user experience on your website to be unique and as volatile as the value of your favorite cryptocurrency, then FractaleJS is for you.

### Demo

![fractalJS](https://user-images.githubusercontent.com/2556413/120099470-e4c0bd80-c13b-11eb-952a-24d1f33aeb76.gif)

### Installation

```
<link href="fractal.css" rel="stylesheet">
<script src="fractal.js"></script>
```

### Usage

create an instance of the fractal object before the body tag was closed

Options can be passed to the fractal instance:

```
<script>
    var obj = {};
    var fractal = new Fractal(obj);
    fractal.init();
</script>
```
To activate FractalJS for h1 headings you simply pass the following object:

```
var obj = {h1: true};
```

To activate additional paragraphs, change the object as follows:

```
var obj = {h1: true, p: true};
```

To use a header, you have to set the fractal-header class and tell the fractal instance which type of header is required.

```
<div class="fractal-header">
      <h1>FractalJS</h1>
</div>
```

With backgroundColor: true, a random color is set each time the page is called up.

```
var obj = {h1: true, p: true, header: {padding: true, backgroundColor: true}};
```

If you pass an array with RGB values to backgroundColor, a color similar to your desired will be set each time.

```
var obj = {h1: true, p: true, header: {padding: true, backgroundColor: [1, 156, 50]}};
```

If you want to create a new background with a gradient every time, just pass gradient: true

```
var obj = {h1: true, p: true, header: {padding: true, gradient: true}};
```

The padding is of course optional
```
var obj = {h1: true, p: true, header: {gradient: true}};
```

To create a list with a bit of magic just use the class fractal-list

```
<ul class="fractal-list">
    <li>Todo #1</li>
    <li>Todo #2</li>
    <li>Todo #3</li>
    <li>Todo #4</li>
    <li>Todo #5</li>
</ul>
 ```
