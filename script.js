const placeholder = `# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

*Italic*
**Bold**
***Italic & Bold***
~~Strikethrough~~

> This is a blockquote
> Lorem ipsum dolor sit amet
> Lorem ipsum dolor sit amet

Inline code: \`<p>Lorem ipsum</p>\`

\`\`\`html
<!-- Block of code -->
<h1>Hello World</h1>
<p>Lorem ipsum</p>
\`\`\`

\`\`\`js
// Another block of code
function init() {
console.log('Hello World');
}
\`\`\`

- Unorder List Item 1
- Unorder List Item 2

1. Order List Item 1
2. Order List Item 2

![Image of Marked.js](https://avatars2.githubusercontent.com/u/19886934?s=400&v=4)
Markdown parsed with **[Marked.js](https://marked.js.org/#/README.md#README.md)**`;


$(function() {
  $('#editor').val(placeholder);
  $('#preview').html(marked(placeholder));

  $('#editor').on('input', evt => {
    let markdown = $('#editor').val();
    $('#preview').html(marked(markdown));
  });
});
