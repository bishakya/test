const core = require('@actions/core');

try {
  // Get the user input from the action's input
  const userMessage = core.getInput('user_message');
  console.log(`User Message: ${userMessage}`);
} catch (error) {
  core.setFailed(error.message);
}
