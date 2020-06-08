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
  toggleView();

  $(window).on('resize', toggleView);

  $('#toggle_button').on('click', evt => {
    $('#editor-container, #preview-container').toggle();
  });

  marked.setOptions({
    // Highlight code blocks
    highlight: function(code, language) {
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
    // Allows line breaks with return button
    breaks: true
  });

  const renderer = new marked.Renderer();
  // Insert target="_blank" into <a> tags
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  }

  $('#editor').val(placeholder);
  $('#preview').html(marked(placeholder, {renderer: renderer}));

  // Set cursor to beginning of textarea
  $('#editor').get(0).setSelectionRange(0, 0);
  $('#editor').focus();

  $('#editor').on('input', evt => {
    let markdown = $('#editor').val();
    $('#preview').html(marked(markdown));
  });
});


function toggleView() {
  if ($(window).width() < 992) {
    // Show toggle button on screens < 992px
    $('#toggle_button').show();
    // If window was >=992px and < 992px after resize, show editor and hide preview
    // If window was < 992px and still < 992px after resize, keep the current view
    if ($('#editor-container').is(':visible') && $('#preview-container').is(':visible')) {
      $('#editor-container').show();
      $('#preview-container').hide();
    }
    // Hide toggle button and show both editor and preview on screens >= 992px
  } else {
    $('#editor-container, #preview-container').show();
    $('#toggle_button').hide();
  }
}
