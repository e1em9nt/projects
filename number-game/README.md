# Guess My Number Game

## Description
"Guess My Number!" is a fun and interactive web-based game where the player has to guess a randomly generated number between 1 and 20. The game provides feedback on whether the guess is too high or too low, and the player can continue guessing until they get the correct answer. The game also includes a scoring system, with a high score tracker to motivate the player to beat their previous best score.

## Tech Stack
- **HTML** - The structure of the game interface
- **CSS** - Styling the game's interface and making it visually appealing
- **JavaScript** - Game logic  

## Features
- **Random Number Generation**: A random number between 1 and 20 is generated, and the player tries to guess it.
- **Score Tracking**: The score starts at 20 and decreases as the player makes incorrect guesses.
- **High Score Tracking**: The highest score achieved by the player is saved.
- **Feedback System**: The player is given feedback on whether their guess is too high or too low.
- **Restart Feature**: Players can restart the game at any time by clicking the "Again!" button.

## How to Run the Project
1. **Clone the repository** or download the project folder.
```bash
git clone https://github.com/e1em9nt/projects.git
cd number-game
```
2. Open the `numberGame.html` file in any modern web browser (Chrome, Firefox, etc.).

## Known Limitations and Possible Improvements
### Limitations:
- **Limited Range**: The current game only supports a guessing range between 1 and 20. Expanding this range could make the game more challenging.
- **No Difficulty Settings**: The game currently has no difficulty options to increase or decrease the range or starting score.
- **UI Responsiveness**: While the design works well on most screen sizes, further optimization for mobile devices or smaller screen sizes could improve the user experience.

### Potential Improvements:
- **Mobile Optimization**: Make the interface more responsive for smaller screens (e.g., tablets and phones).
- **Difficulty Levels**: Add difficulty levels (e.g., Easy, Medium, Hard), which would adjust the range of numbers and starting score.
- **Multiple Players**: Introduce a multiplayer option where players can compete against each other.
- **Save Progress**: Use local storage to save the player's progress, high score, or games played.
