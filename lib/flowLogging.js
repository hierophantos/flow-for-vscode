/**
 * Adds a gloabl that is used inside consoleAppender.js to output console messages
 * to the user, instead of to the developer console.
 */
export function setupLogging(): void {
  const channel = vscode.window.createOutputChannel("Flow");
  global.flowOutputChannel = channel
}