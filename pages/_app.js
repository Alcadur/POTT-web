import 'pott/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { wrapper } from 'pott/store/store';
import { Provider } from 'react-redux';

export default function App({ Component, ...rest }) {
    const {store, props} = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    );
}