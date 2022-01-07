# Quizzer
Quizzer WebApp to demonstrate the usage SignalR

_based on the example projects by Fabian Gosebrink ([Frontend](https://github.com/FabianGosebrink/Sample-Todo-Frontend), [Backend](https://github.com/FabianGosebrink/Sample-Todo-Backend))_

# Intention
This project is built to demonstrate the usage of SignalR to synchronize several clients, in this case web browser sessions. When running the project, you can open several instances of the web app and the actions done in one of the instance are automatically published to the other instances without an explicit reload.

# Requirements / Installations
- Visual Studio 2019 or higher
- .NET 5 runtime and SDK
- node.js v16 or higher with npm 8 or higher

# Usage
1. Clone the repository.
2. Open the backend in /QuizzerBackend in Visual Studio or higher.
3. Run the backend.
4. Open the frontend in /QuizzerFrontend in _cmd_.
5. Execute `npm install`.
5. Execute `npm start`.
6. Open the web app in your browser at `http://localhost:4200`.
