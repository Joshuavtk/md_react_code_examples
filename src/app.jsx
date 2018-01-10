import React from 'react';
import List from './components/list/list';

/**
 * Dit is onze hoofdcomponent. Alles valt binnen deze component
 */
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app__title">
                    Code Examples
                </div>
                <div className="app__container">
                    <List
                        label="Je voorbeelden:"
                    />
                </div>
            </div>
        );
    }
}

export default App;