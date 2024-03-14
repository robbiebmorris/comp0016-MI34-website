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

# Instrumented Tests

Instrumented tests in Android are a crucial part of the testing strategy for Android applications. These tests are designed to run on physical devices or emulators and simulate user interactions with the app. They are performed to ensure that the app functions correctly in a real-world environment and to validate its behavior across different devices, screen sizes, and operating system versions.Instrumented tests provide a higher level of confidence in the app's functionality, as they simulate real user interactions and validate the app's behavior against expected outcomes.

We used instrumented testing on the majorirty of our classes such as fragments, activities, dialogs and bluetooth components due to their use of the Android framework and UI components. This meant they could not be run on the standard JVM and be tested using standard unit tests. The tools we used for instrumented testing are Espresso, Mockito, UiAutomator, JUnit4 and AndroidX Fragment-Testing.

<div class="img-center"> ![Testing Frameworks](../../static/img/testing/testing_logos.png) </div>

AndroidX Fragment-Testing allowed us to launch and test fragments and activities in isolation to the full app. We then used Espresso to simulate user interactions and make assertions on UI components to test the UI and UiAutomator to interact with system-level UI elements such as permission requests. We combined this with Mockito to mock objects of our classes to simulate their behaviour, we could they insert them into our tests to simulate a variety of scenarios. Finally, we made use of JUnit to make assertions about the state of our objects during tests.

An example UI test on a fragment is shown below:

```
public class AddManualFragmentTest {
    private FragmentScenario<AddManualFragment> scenario;
    @Mock
    private EventBus eventBus;

    @Before
    public void setUp() {
        scenario = FragmentScenario.launchInContainer(AddManualFragment.class, null, R.style.Theme_COMP0016Group23App);
        scenario.moveToState(Lifecycle.State.RESUMED);

        MockitoAnnotations.openMocks(this);
    }

    @After
    public void tearDown() {
        reset(eventBus);
    }

    @Ignore("Helper method to simulate button touch events")
    private void clickButtonWithId(int viewId) {
        scenario.onFragment(fragment -> {
            Button button = fragment.requireView().findViewById(viewId);

            MotionEvent downEvent = MotionEvent.obtain(0, 0, MotionEvent.ACTION_DOWN, button.getWidth() / 2f, button.getHeight() / 2f, 0);
            button.dispatchTouchEvent(downEvent);

            MotionEvent upEvent = MotionEvent.obtain(0, 0, MotionEvent.ACTION_UP, button.getWidth() / 2f, button.getHeight() / 2f, 0);
            button.dispatchTouchEvent(upEvent);
        });
    }

    @Test
    public void testInvalidMacError() {
        onView(withId(R.id.deviceMacInput)).perform(typeText("Not a valid MAC address"));
        clickButtonWithId(R.id.addDeviceButton);
        onView(withId(R.id.deviceMacInput)).check(matches(hasErrorText("Invalid MAC")));
    }
}
```

# Integration Tests

Integration tests were used to test how the bluetooth component interacted as a whole and with the Android framework. Alot of the same testing frameworks were used for this and we tried to simulate as much of the bluetooth functionality as possible to ensure eveything worked as intended. AndroidX allows us to launch an activity within our test class, we then created a blank TestActivity as to isolate the bluetooth component as much as possible so we could perform tests on it's functionality.

# Performace Tests

We tested our apps performance by measuring it's CPU usage and memory usage using the provided profiler by Android Studio. This allowed us to see the average overall performance of our app over a prolonged test but also gave us insight into how CPU and memory usage changed when we interacted with certain functions. This allowed us to identify any performance bottlenecks but also draw conclusions about the apps overall performance and usability.

# User Acceptance Tests

# Compatability Tests