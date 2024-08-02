
## Usage

### Adding a Workout
1. Enter the name, workout type, and duration in the respective input fields.
2. Click the "Submit" button to add the workout.
3. The new workout will appear in the list and be saved in `localStorage`.

### Filtering Workouts
1. Enter the workout type in the "Filter by Workout Type" input field.
2. Click the "Filter" button to filter the workouts.
3. The list will update to show only workouts that match the specified type.

### Deleting a Workout
1. Locate the workout entry you want to delete in the list.
2. Click the "Delete" button next to the workout entry.
3. The workout will be removed from the list and `localStorage`.

### Pagination
- **Navigation Controls:** Use the pagination controls at the bottom of the list to navigate through pages.
- **Automatic Page Adjustment:** If a page becomes empty after deleting entries, the application will automatically navigate to the previous page.

## Additional Information

### info.component.ts
- Handles the core logic for managing workouts, including adding, deleting, filtering, and pagination.
- Integrates with `localStorage` to persist data.

### info.component.html
- Provides the user interface for the application, including input fields, buttons, and the list of workouts with pagination controls.

### info.component.css
- Contains styles for the `InfoComponent` to ensure a visually appealing interface.

## Acknowledgements
This project was developed as a learning exercise in Angular. Special thanks to the Angular community for their comprehensive documentation and support.
