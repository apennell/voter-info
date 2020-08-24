# Landing Page Project

## Project 2 for Udacity Frontend Nanodegree course

This project is a demonstration of accessing and manipulating the DOM using JavaScript.

Core requirements:

- Navigation built dynamically using an unordered list, based on document `section`s
- At least 4 sections on page, with currently active section styled
- Clicking an item from the navigation scrolls to the appropriate section

Additional features:

- Style active navigation item
- "Scroll to top" button
- Custom design and content

[Project Rubric](https://review.udacity.com/#!/rubrics/2658/view)

The best way to implement the scroll-to-section behavior would be to use the native behavior of HTML and CSS, which preserves accessibility while improving UX ([reference](https://css-tricks.com/snippets/jquery/smooth-scrolling/)). All that would be required is this CSS addition:

```css
html {
  scroll-behavior: smooth;
}
```

However, it was clear that the project requirements wanted this done using JavaScript selectors and scrolling, so I implemented it that way rather than the best way.
