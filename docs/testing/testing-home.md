# Testing

## Testing Stratergy

MotionInput Bluetooth controller is a client-side application. This means we needed to formulate a comprehensive testing stratergy that would adequately cover all possible cases of user input through our UI. This meant we could ensure the apps usability meet our desired standards and that the app handles all cases of user input (good and bad) in a way that doesn't affect it's stability. Overall, this meant we could deliver an app that would be of a high standard.

### Testing Scope

1. MotionInput Bluetooth controller will be used with real people who will interact with the app using the UI, therefore, we must consider all possibilities of how of UI could be used. This means that the UI should not only be tested such that it correctly works with the internals of the app but that it also handles all forms of user input and deals with invalid input gracefully without causing any crashes.

2. The controller uses Bluetooth to connect to a range of devices therefore we should ensure to test compatibility with as many devices as possible.

3. The controller provides forms of control which should all be tested throughourly to ensure they work as designed.

4. Since the app is designed as being accessible to all, the accessibility of the app should be extensively tested.

### Automated and Manual Testing

Our testing stratergy followed the test-driven-development principle throughout the development process. We designed and wrote a combination of instrumented and integration tests that were focused on induvidual classes and small subsets of classes respectively and ensured the overall functionality remained as expected during development and any errors would be flagged immedietly. Simultaneously, we also fequently tested the app as a whole using test builds amoungst ourselves and test users to catch any other bugs. During this we made extensive use of GitHubs issues feature to track and document bugs as they were found and they aid in the process of resolving them. The full testing stratergy is summarised below:

<div class="img-center">

| Automated Tests | Manual Tests             |
|-----------------|--------------------------|
| Instrumented Tests | User Acceptance Tests |
| Integration Tests  | Compatability Tests   |
| Performance Tests  |                       |

</div>

# Instrumened Tests

# Integration Tests

# Performace Tests

# User Acceptance Tests

# Compatability Tests