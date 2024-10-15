import styled from "styled-components";
const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bfdbf7;
  width: 100%;
`;
const AppList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e1e5f2;
  margin: 2%;
  border: 2px solid #ccc;
  border-radius: 15px;
  padding: 2%;
`;
const StyledUL = styled.ul`
  list-style-type: none;
`;
const StyledTitle = styled.h1`
  margin: 2%;
`;
const Description = styled.h2`
  margin: 0% 0% 0% 2%;
`;
export default function AppDevProjects() {
  return (
    <AppDiv>
      <StyledTitle>Android Mobile App Experience</StyledTitle>
      <Description>All projects utilize Jetpack Compose.</Description>
      <StyledUL>
        <AppList>
          <li>
            <h3>Calculator</h3>
            <h5>
              <a href="https://github.com/mlxs01/501-Calculator">Github Repo</a>
            </h5>
            <StyledUL>
              <li>Implemented a Calculator App with a TextField Input.</li>
              <li>
                Handles Addition, Subtraction, Multiplication, Division, and
                Modulus functions.
              </li>
              <li>
                Handles Error Checks for Invalid Operations and Divide by Zero
                errors.
              </li>
            </StyledUL>
          </li>
        </AppList>
        <AppList>
          <li>
            <h3>Hangman</h3>
            <h5>
              <a href="https://github.com/mlxs01/TommyHo-MichelleSun-CamilleChristie-Hangman.git">
                Github Repo
              </a>
            </h5>
            <StyledUL>
              <li>
                Implemented a variation of the Hangman Game using custom Kirby
                images.
              </li>
              <li>
                Implements reconfiguration of page in both Portrait and
                Landscape modes.
              </li>
              <li>
                Provides a list of letters to choose from that automatically
                disables once clicked or asks for a hint.
              </li>
              <li>
                Updates main image with different states to display how many
                total guesses the player has left.
              </li>
              <li>
                Remembers state between reconfiguration and recomposition.
              </li>
            </StyledUL>
          </li>
        </AppList>
        <AppList>
          <li>
            <h3>Multi-Pane Shopping List App</h3>
            <h5>
              <a href="https://github.com/tommyho973/TommyHo_Multi-PaneShoppingApp.git">
                Github Repo
              </a>
            </h5>
            <StyledUL>
              <li>
                Display a list of products (e.g., “Product A”, “Product B”,
                “Product C”) in a LazyColumn.
              </li>
              <li>
                Each product is clickable. When clicked, it shows the product
                details in a second pane.
              </li>
              <li>
                When a product is selected, its details are displayed in another
                pane (name, price, description).
              </li>
              <li>
                If no product is selected, display a placeholder message like
                “Select a product to view details.”
              </li>
              <li>
                In portrait mode, display only the product list first. When a
                product is selected, navigate to a second screen to display
                product details.
              </li>
              <li>
                In landscape mode, use a Row layout to show both the product
                list and the product details side by side.
              </li>
              <li>
                Use remember and mutableStateOf to track the selected product
                and update the UI accordingly.
              </li>
            </StyledUL>
          </li>
        </AppList>
        <AppList>
          <li>
            <h3>Task Completion App</h3>
            <h5>
              <a href="https://github.com/tommyho973/TommyHo_CamilleChristie_MichelleSun-TaskCompletionApp.git">
                Github Repo
              </a>
            </h5>
            <StyledUL>
              <li>
                Expands on a simple task completion app that allows users to
                dynamically add tasks and add checkboxes to indicate completion.
              </li>
              <li>
                Clicking the “Add Task” Button adds the task to the list and
                displays it on the screen.
              </li>
              <li>
                Each task has a checkbox to mark it as complete, and the UI
                recomposes when tasks are added.
              </li>
              <li>Each task has a Checkbox to toggle its completion status.</li>
              <li>
                When a task is marked as complete, the UI updates to reflect the
                new state.
              </li>
              <li>
                A “Clear Completed” Button removes all tasks that have been
                marked as completed.
              </li>
            </StyledUL>
          </li>
        </AppList>
        <AppList>
          <li>
            <h3>Reminder App</h3>
            <h5>
              <a href="https://github.com/camchris/TommyHo-MichelleSun-CamilleChristie-ReminderApp.git">
                Github Repo
              </a>
            </h5>
            <StyledUL>
              <li>Users can enter a reminder message using a TextField.</li>
              <li>
                They can select a date using a DatePickerDialog and a time using
                a TimePickerDialog.
              </li>
              <li>
                After setting the date, time, and reminder message, the app
                displays a Snackbar notification to confirm that the reminder
                has been set.
              </li>
              <li>
                Once a reminder is set, display the selected date, time, and
                reminder message using Text composables.
              </li>
              <li>
                The UI should recompose to display the new reminder details
                whenever a new reminder is added or updated.
              </li>
              <li>
                A Clear Reminder button allows users to remove the current
                reminder, resetting the app and displaying an empty state.
              </li>
              <li>
                When the reminder is cleared, a Snackbar appears to confirm that
                the reminder has been removed.
              </li>
              <li>
                Use Snackbar to notify the user when a reminder is set or
                cleared successfully.
              </li>
            </StyledUL>
          </li>
        </AppList>
        <AppList>
          <li>
            <h3>Quiz App w/ Recomposition</h3>
            <h5>
              <a href="https://github.com/tommyho973/TommyHo-QuizApp">
                Github Repo
              </a>
            </h5>
            <StyledUL>
              <li>
                Display a question from a predefined list using a Text
                composable inside a Card.
              </li>
              <li>
                The UI recomposes when the user answers the question, displaying
                the next question in the list.
              </li>
              <li>
                Allow users to input their answer using a TextField composable.
              </li>
              <li>
                The UI recomposes to check the answer and move to the next
                flashcard when the user submits.
              </li>
              <li>
                When users click the Submit Answer Button, the app checks if the
                answer is correct and triggers a Snackbar with feedback
                (correct/incorrect).
              </li>
              <li>
                If correct, the app moves to the next question, recomposing the
                UI to display it.
              </li>
              <li>
                When the user finishes answering all questions, display a
                Snackbar showing that the quiz is complete and offer to restart
                the quiz.
              </li>
              <li>
                Each time a new question is loaded or an answer is submitted,
                the UI recomposes to reflect the updated state (new question,
                feedback, etc.).
              </li>
            </StyledUL>
          </li>
        </AppList>
      </StyledUL>
    </AppDiv>
  );
}
