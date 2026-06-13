# Event Handling Test

A simple vanilla JavaScript demo showing proper DOM event handling and separation of concerns.

### Demo
Click the red button to update the right cube with "Red".  
Click the blue button to update the left cube with "Blue".

# Project Structure

```text
Event-Handling-Test-1/
├── index.html # Markup with semantic buttons
├── main.js # Event listeners + DOM logic
├── style.css # Layout and visual feedback
└── README.md # You are here
```

### Key Concepts Demonstrated
- **Event Listeners**: Uses `addEventListener('click', ...)` instead of inline `onclick`
- **DOM Ready**: Waits for `DOMContentLoaded` so elements exist before querying
- **Semantic HTML**: `<button>` elements for controls + `<main>` for main content
- **Separation of Concerns**: No JavaScript mixed into HTML
- **Accessibility**: `aria-label` on buttons for screen readers

### How to Run
1. Clone or download this folder
2. Open `index.html` in any modern browser
3. No build step or dependencies needed

### Improvements Over Original
| Original | Cleaned Up |
| --- | --- |
| `onclick="myFunction()"` in HTML | `addEventListener` in JS |
| `myFunction`, `myFunctionTwo` | Descriptive arrow functions |
| `div` for buttons | Semantic `button` elements |
| Script in `<head>` | `<script defer>` at end of body |
| No cube dimensions | Fixed width/height + flexbox |
| `innerHTML` | `textContent` for safety |

### Next Ideas
- Add keyboard support with `keydown` events
- Animate cube positions instead of just text
- Add a reset button
- Track click counts

Built with HTML, CSS, and vanilla JS. No frameworks needed.

## Live Demo
[View Project Here](https://andy-k-taua.github.io/Event-Handling-Test-1/)