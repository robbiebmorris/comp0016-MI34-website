# Design Goals

During the design and implementation process we used the following considerations:

## Ease of Use

- The user-interface should be simple and easy to use.
- Flow between different components of the UI should be easy to navigate.
- The features of the app must be intuitive and easy to learn.
- Each component of the app should have an information section which provides how-to-use insturctions to the user.

## Modularity

- Different components of the app, e.g. mouse or keyboard, must be modular and seperate from one another.
- This means new app components can be added easily by future developers.
- Components which share common features, such as information dialog's, must implement a way to share them between each other while minimising duplicate code. 

## Extendability

- New components and UI features should be easy to add and implement.
- Extending the functionality of existing components should be intuitive for new developers.

## Consistiency

- UI elements of the app should be consistient throughout different components.
- Coding conventions should be followed throughout the entire codebase to increase readability for future developers.