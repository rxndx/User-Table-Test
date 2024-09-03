import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserTable from '../src/component/UserTable';

const App: React.FC = () => (
    <Provider store={store}>
        <div style={{ padding: 24 }}>
            <UserTable />
        </div>
    </Provider>
);

export default App;