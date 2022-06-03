jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-firebase/auth', () => ({
    __esModule: true,
    default: () => ({
        onAuthStateChanged: jest.fn(),
        signInWithPhoneNumber: jest.fn().mockReturnValue({
            confirm: jest.fn().mockReturnValue('bar')
        })
    })
}));