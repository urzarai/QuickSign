# Canvas Input and Button Alignment

This project is designed to demonstrate the proper alignment of input options and buttons within the width of a canvas while maintaining responsive design principles. The CSS ensures that the layout works seamlessly across various screen sizes.

---

## Features

1. **Input Options Alignment**:
   - Input fields are aligned properly within the width of the canvas.
   - The layout is flexible and adjusts dynamically to avoid overflow.

2. **Button Alignment**:
   - Buttons in the bottom section are aligned correctly without overlapping or stretching outside the canvas.
   - Proper spacing is maintained between buttons.

3. **Responsive Design**:
   - The layout adapts to different screen sizes using media queries.
   - Input options and buttons stack vertically on smaller screens for a better user experience.

---

## Project Structure

### Files:
- `index.html`: The HTML structure of the project.
- `styles.css`: The CSS file that handles layout and styling.

---

## Installation and Usage

1. Clone this repository or download the source files.
2. Open `index.html` in a browser to view the project.
3. Edit `styles.css` to customize the layout or appearance as needed.

---

## CSS Highlights

### Top Section (Input Options)
- **Class**: `.top`
- Uses `display: flex` and `flex-wrap: wrap` to align input options within the canvas width.
- Includes a `gap` for consistent spacing between elements.

### Bottom Section (Buttons)
- **Class**: `.bottom`
- Uses `display: flex` and `flex-wrap: wrap` to align buttons within the canvas width.
- Defines `min-width` and `max-width` to ensure buttons maintain a consistent size.

### Media Queries
- Two breakpoints:
  - **768px**: Adjusts padding, aligns inputs and buttons vertically, and increases spacing.
  - **480px**: Ensures all elements are fully responsive for smaller screens.

---

## How to Customize

1. **Canvas Width**:
   - Adjust the `max-width` property in the `.main` or `.canvas` classes.
2. **Input Field Styling**:
   - Modify the `.form-control` or `#font-size` classes for padding, borders, or colors.
3. **Button Colors**:
   - Update the `.btn-danger`, `.btn-success`, and `.btn-warning` classes for custom button colors.

---

## License

This project is open-source and free to use. Feel free to modify it as per your requirements.
