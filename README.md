# vrit-task-A
# Infinite Card Scrolling
This project implements a dynamic and interactive card scrolling effect. The primary feature is that the cards scale up when they become active and less opaque in non active cards providing a visually engaging user experience.

## Setup Instructions
### Prerequisites
To run this project locally, you need the following installed:

1. **A modern browser** (e.g., Chrome, Firefox, Safari) to view the web page.
2. **Code Editor** (e.g., VSCode) to edit the files if necessary.

### Steps to Run

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Basanta-khatri-0311/vrit-task-A.git

   cd infinite-card-scrolling 

# File Structure 

## index.html
The main HTML file containing the structure of the page.

## styles.css       
The CSS file defining the layout, styling, and scroll effects.

## script.js        
The JavaScript file containing the logic to detect the center card and apply the "active" effect.
## README.md 
This file containing setup instructions, technology choices, and Future improvements.

# Technology Choices and Rationale

#### HTML:
- Used for structuring the content. It's a simple structure to display a container with cards.

#### CSS:
- **Flexbox**: Used for centering the `.container` in the middle of the screen. It ensures the layout is responsive and works across different screen sizes.

- **CSS Grid**: Utilized for the layout inside each card, allowing for a neat arrangement of inner elements.

- **Transitions**: Smooth transitions are applied to the cards when they are in an "active" state, allowing for a dynamic user experience.

#### JavaScript:
- **Vanilla JavaScript** is used to implement the active card effect, detecting the card closest to the center of the container and applying the scaling and shadow effects.

- **Event Listeners**: Used for detecting the scroll events and updating the active card in real-time.

# Known Limitations/Trade-offs

#### Performance:
- With a large number of cards or a high-density layout, performance may degrade on lower-end devices due to the continuous re-calculations of card positions. Optimizing the scroll logic for better performance (like debouncing scroll events) would be necessary for larger datasets.

#### Responsiveness:
- The layout is generally responsive, but the hardcoded sizes for the cards (e.g., 300px width, 250px height) might not adapt well to every screen size. For full responsiveness, it's recommended to use percentage-based or viewport-based units (vw, vh).

#### Browser Compatibility:
- Some modern CSS properties (like scroll-behavior) might not be supported in all browsers, especially older versions. Testing on different browsers is essential.

#### Accessibility:
- The project currently lacks accessibility features, such as keyboard navigation or screen reader support, which would be important for making the website fully inclusive.


# Future Improvements

#### True Infinite Loop:
- Enhance the scroll logic to replicate and cycle through cards, creating a truly infinite loop experience. This can be done by dynamically adding and removing cards as the user scrolls.

#### Performance Optimization:
- Implement throttling or debouncing for the scroll events to reduce the frequency of calculations and improve performance.
- Consider using `requestAnimationFrame` for smoother updates.

#### Responsive Design Enhancements:
- Make the card sizes and layout more flexible to adapt to various screen sizes (e.g., using `Flexbox` or `grid` with relative units like %, vw, vh).
- Adjust card dimensions, padding, and margins dynamically for mobile screens.

#### Accessibility Improvements:
- Add keyboard navigation support, allowing users to scroll through cards using the arrow keys or other common shortcuts.
- Include ARIA (Accessible Rich Internet Applications) attributes to improve accessibility for screen readers.

#### Customization:
- Allow the user to configure the number of cards, the card size, or the scroll speed through a settings panel or configuration file.

#### Mobile Touch Support:
- Add support for swipe gestures on mobile devices for an improved user experience.



