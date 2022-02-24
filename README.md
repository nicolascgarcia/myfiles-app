# MyFiles

I have developed a simple File Management app using React Native with TypeScript, focusing only on Android (I don't have any Apple computer to be able to develop for IOS). In this app you can see a list of documents and display it as a list or grid. You can sort this list alphabetically or by most recents. When adding a document, it displays a bottom sheet modal with a form to create a new document. Also, it is connected to a websocket so the app notifies when a new document is added by other user. The list can be pulled to refresh and each item in list view can be shared.

![image](https://user-images.githubusercontent.com/60199944/155543213-51184aa6-6424-446c-a19a-236b8f2037da.png)
![image](https://user-images.githubusercontent.com/60199944/155543000-f04c0b80-2f8d-4477-96e5-ee839d7baab1.png)


## How to use

First, you need to install all dependencies with Yarn:

    yarn

Create a `.env` file providing the following variables (as in `.env.sample`) with the correct values:

    WEBHOOK_URI=ws://localhost:8080
    API_URI=http://localhost:8080

To start the client, run:

    yarn start

Then you need to install the debug app in a emulator or your android phone using:

    yarn android

## Test

I did't added the tests because I didn't had enough time to add it.

## External Libs

[faker](https://github.com/faker-js/faker): Faker is used to generate random values to create a new document.

[react-navigation](https://reactnavigation.org): React Navigation is used to handle the screens management in the app.

[date-fns](https://date-fns.org): It is used to format the date distance from the current date and display it in each document cell in the list.

[react-native-flash-message](https://github.com/lucasferreira/react-native-flash-message):
Is used to display a notification content at the top of the app.

[react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/): It is used to detect gesture in the app and handling how the bottom sheet interacts.

[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/): It is used to animate the view component in bottom sheet component and sort component.

[styled-components](https://styled-components.com/): It is used to write CSS code to style the components.

[styled-system](https://styled-system.com/): It is used to be able to provide CSS in components props.

[react-native-svg](https://github.com/react-native-svg/react-native-svg): It provides SVG support for React Native, so I am using SVG files for the icons.
