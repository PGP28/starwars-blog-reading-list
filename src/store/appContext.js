import React, { useState, useEffect } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponet => {
    const StoreWrapper = props => {
        const [state, setState] = useState(getState({
            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: {...state.actions}
            })
        }));

        useEffect(() => {
            // ejecutar todos mis fetch
            state.actions.getPeople();
            state.actions.getPlanets();
        },[]);

        return (
            <Context.Provider value={state}>
                <PassedComponet {...props} />
            </Context.Provider>
        )
    }

    return StoreWrapper;
}

export default injectContext;