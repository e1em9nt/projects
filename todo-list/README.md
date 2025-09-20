# Todo List Application

## Description
This is a simple **Todo List** web application **built using React and TypeScript**.  
It allows users to manage their to-do tasks with functionality to create, read, update, and delete (CRUD operations). Tasks can be marked as completed, edited, or deleted. The app also includes basic validation to ensure that task names follow the required format.

## CRUD
- **Create**: Add new to-do items with validation to ensure they are not duplicates, contain only valid characters, and don't exceed the maximum length.
- **Read**: View the list of tasks and mark them as completed.
- **Update**: Edit existing to-do items. It includes validation for the new task name and ensures no duplicates or invalid characters.
- **Delete**: Remove tasks from the list.

## Tech Stack
- **Frontend**: 
  - React
  - TypeScript
  - CSS
  - FontAwesome for icons
- **Build Tool**: Vite
- **Linting**: ESLint

## How to Run the Project
**Prerequisites**: Make sure you have Node.js and npm installed on your machine.

1. **Clone the repository and navigate to the project folder**:
```bash
git clone https://github.com/e1em9nt/projects.git
cd todo-list
```
2. **Install the dependencies**:
```bash
npm install
```
3. **Run the development server**:
```bash
npm run dev
```
4. **Navigate to the provided link**.

## Known Limitations & Edge Cases
- **No Undo**: Once a task is deleted, it cannot be restored unless the app is reloaded.
- **Task Order**: Tasks are listed in the order they are added, and the app doesn't currently support reordering them.
- **Edge Case for Large Inputs**: If the input text is too long (more than 30 characters), the validation will prevent it from being added.

## Future Improvements
- **Reordering Tasks**: Implement drag-and-drop functionality to allow reordering tasks.
- **Due Dates and Priority**: Add the ability to assign due dates or priority levels to tasks.
- **Theme Customization**: Allow users to choose between different themes for the app.
