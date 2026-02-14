# A.1 HTML Fundamentals

## 1. HTML Document Structure

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset='UTF-8'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Title</title>
    </head>
    <body>
        content
    </body>
</html>
```

#### DOCTYPE:

- Tells the browser: “This document is HTML5.”
- Forces the browser to render in standards mode.
- Prevents quirks mode (old browser compatibility mode).
- Without DOCTYPE, browsers may behave inconsistently.

#### `<html lang="en">` — Root Element

- This is the root element of the page.
- lang attribute => Helps screen readers, Helps SEO, Improves accessibility

#### `<head>`

- This contains metadata, not visible content.

#### `<body>`

- The Visible Content Area.
- Everything users see is inside the body: Text, Images, Videos, Buttons, Forms, Headings, Sections.
  The body is where your UI lives.

## 2. Meta tags: charset, viewport, description, keywords

- Meta tags provide information about the webpage.

```
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="HTML fundamentals revision notes">
<meta name="keywords" content="HTML, basics, revision">
```

- charset → Character encoding

- viewport → Responsive design

- description → SEO summary

- keywords → Search engine keywords

## 3️. Semantic HTML5 Elements

- Semantic elements clearly describe their meaning.
- Examples:

`<header>` → Top section

`<nav>` → Navigation links

`<main>` → Main content

`<section>` → Thematic grouping

`<article>` → Independent content

`<aside>` → Sidebar content

`<footer>` → Bottom section

- Benefits:
  Better SEO, Improved accessibility, Cleaner code structure

## 4. Forms: input types, labels, validation attributes (required, pattern, min, max)

```<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="date">
<input type="radio">
<input type="checkbox">
<input type="file">
```

- required – Makes the input field mandatory before the form can be submitted.

- pattern – Defines a regular expression that the input value must match to be valid.

- min – Sets the minimum allowed value for number or date inputs.

- max – Sets the maximum allowed value for number or date inputs.

- maxlength – Specifies the maximum number of characters allowed in a text input field.

## 5. Form attributes: action, method, name, id, placeholder

- action –`<form action="/submit.php">` Specifies the URL where form data is sent

- method – `<form method="POST">` Defines how data is sent (GET or POST)

- name – `<form name="loginForm">` Assigns a name to the form for identification (mainly in JS)

- id – `<form id="loginForm">` Provides a unique identifier for styling or scripting

- placeholder – `<input type="text" placeholder="Enter your name">` Displays hint text inside an input field

## 6. Tables: table, thead, tbody, tfoot, tr, th, td

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Footer</td>
    </tr>
  </tfoot>
</table>
```

#### Table Tags:

- table – Defines the entire table container that holds all rows and columns.
- thead – Groups the header content of the table (usually column headings).
- tbody – Contains the main data rows of the table.
- tfoot – Groups the footer content, often used for totals or summaries.
- tr (row) – Defines a single table row.
- th (header cell) – Defines a header cell, usually bold and centered by default.
- td (data cell) – Defines a standard data cell inside a row.

## 7. Lists: ul, ol, li, dl, dt, dd

#### Unordered Lists :-

```
<ul type="square">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

#### Ordered Lists :-

```
<ol type="1" start="3" reversed>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

#### Description Lists :-

```
<dl>
  <dt>HTML</dt>
  <dl>HyperText Markup Language</dl>
</dl>
```

#### Attributes :-

- type – Specifies the marker style for `<ol>` (1, A, a, I, i) or `<ul>` (disc, circle, square in older HTML).

- start – Sets the starting number for an ordered list `<ol start="5">`.

- reversed – Displays the ordered list in descending order `<ol reversed>`.

- value – Sets a specific number for an individual `<li>` inside an ordered list `<li value="10">`.

## 8. Media elements: img (src, alt), audio, video

### image

`<img src="image.jpg" alt="Description of image">`

#### attributes

- src – Specifies the path or URL of the image to be displayed ` src="image.jpg"`

- alt – Provides alternative text describing the image for accessibility and when the image fails to load `alt="Description of image"`

### video

`<video controls src="video.mp4"></video>`

#### attributes

- src – Specifies the path/URL of the video file `src="movie.mp4"`

- controls – Displays default video controls (play, pause, volume, etc.) `<video controls>`

- autoplay – Automatically starts playing the video when the page loads `<video autoplay>`

- muted – Mutes the video audio by default `<video muted>`

- loop – Replays the video automatically after it ends `<video loop>`

- poster – Displays an image before the video starts playing `poster="thumbnail.jpg"`

- width – Sets the width of the video player `width="600"`

- height – Sets the height of the video player `height="400"`

- preload – Specifies how the video should be loaded (auto, metadata, none) `preload="auto"`

- playsinline – Plays the video inline instead of fullscreen on mobile devices `<video playsinline>`

### audio

`<audio controls src="audio.mp3"></audio>`

#### attributes

- src – Specifies the path/URL of the audio file `src="audio.mp3"`

- controls – Displays default audio controls (play, pause, volume, etc.) `<audio controls>`

- autoplay – Automatically starts playing the audio when the page loads `<audio autoplay>`

- muted – Mutes the audio by default `<audio muted>`

- loop – Replays the audio automatically after it ends `<audio loop>`

- preload – Specifies how the audio should be loaded (auto, metadata, none) `preload="auto"`

## 9. Links and navigation: a (href, target, rel)
```
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit Website
</a>
```
#### attributes
- href – Specifies the URL or destination the link points to  ```href="https://example.com"```

- target – Specifies where to open the linked document (_self, _blank, _parent, _top)  ```target="_blank"```

- rel – Defines the relationship between the current page and the linked resource (noopener, noreferrer, nofollow, etc.)  ```rel="noopener noreferrer"```

## 10. Attributes: class vs id, data-* attributes 
- class – Used for multiple elements

- id – Unique (one per page)
- data-* – Used to store custom data inside an HTML element without affecting its structure  ```data-user-id="101"```
- data-id – Stores a unique identifier related to the element  ```data-id="25"```

- data-name – Stores a custom name value for scripting purposes  ```data-name="Snehasish"```

- data-role – Stores role-related information for dynamic behavior  ```data-role="admin"```

- data-value – Stores a custom value for processing in JavaScript  ```data-value="500"```

## 11. Accessibility basics: ARIA attributes, alt text, semantic structure
- Use semantic HTML

- Always add alt to images

- Associate <label> with inputs

- Use ARIA attributes when needed

- Maintain proper heading order (h1 → h2 → h3)
```
Example:

<label for="email">Email</label>
<input type="email" id="email" required>
```
#### ARIA
- aria-label – Provides an accessible name for an element when visible text is not sufficient  ```aria-label="Close menu"```

- aria-labelledby – References another element that labels the current element  ```aria-labelledby="heading1"```

- aria-describedby – References an element that provides additional description  ```aria-describedby="desc1"```

- aria-hidden – Hides an element from screen readers  ```aria-hidden="true"```

- aria-expanded – Indicates whether a collapsible element is expanded or collapsed  ```aria-expanded="false"```

- aria-controls – Identifies the element that is controlled by the current element  ```aria-controls="menu1"```

- aria-checked – Indicates the checked state of checkboxes or radio buttons  ```aria-checked="true"```

- aria-disabled – Indicates that an element is disabled but still focusable  ```aria-disabled="true"```

- aria-required – Indicates that user input is required on the element  ```aria-required="true"```

- aria-live – Specifies how screen readers should announce dynamic content updates (polite, assertive)  ```aria-live="polite"```

## Interview Questions
## 1. What is the purpose of DOCTYPE and why is it important?

- DOCTYPE declares the HTML version used in the document  ```<!DOCTYPE html>```
- It tells the browser to render the page in standards mode.
- It prevents the browser from entering quirks mode.
- It ensures consistent behavior across different browsers.

---

## 2. Explain semantic HTML and give 5 examples of semantic tags

- Semantic HTML uses meaningful tags that clearly describe the purpose of the content.
- It improves SEO, accessibility, and code readability.

Examples of semantic tags:
- ```<header>``` – Defines the top section of a page or section.
- ```<nav>``` – Represents navigation links.
- ```<main>``` – Contains the main content of the document.
- ```<section>``` – Groups related content together.
- ```<article>``` – Represents independent, self-contained content.

---

## 3. What is the difference between block and inline elements in HTML?

- Block elements take full width and start on a new line  ```<div>, <p>, <section>```
- Inline elements take only the necessary width and do not start on a new line  ```<span>, <a>, <strong>```
- Block elements can contain inline and other block elements.
- Inline elements usually contain text or other inline elements.

---

## 4. How do you make forms accessible and user-friendly?

- Use ```<label>``` properly linked with inputs using the ```for``` attribute.
- Add validation attributes like ```required```, ```pattern```, ```min```, and ```max```.
- Provide clear placeholder text and helpful error messages.
- Use semantic HTML elements.
- Add ARIA attributes only when necessary.
- Ensure keyboard accessibility and logical tab order.

---

## 5. What are data attributes and when would you use them?

- Data attributes store custom data inside HTML elements using the ```data-*``` format.
- Example: ```<div data-user-id="101"></div>```
- They are mainly used to pass custom information to JavaScript.
- They do not affect layout or styling.
- Useful for dynamic content, IDs, roles, or configuration data.

