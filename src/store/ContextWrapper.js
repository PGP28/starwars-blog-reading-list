// import React, { useState } from 'react';

// export const AppContext = React.createContext(null);

// const ContextWrapper = props => {
//     const [state, setState] = useState({
//         store: {
//             todos: ['Make the bed', 'Take out the trash'],
//             name: 'Luis Rodriguez',
//         },
//         actions: {
//             addTask: title => setState(prevState => {
//                 return { ...prevState, store: {...state.store, todos: state.store.todos.concat(title)} }
//             })
//         }
//     })

//     return (
//         <AppContext.Provider value={state}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export default ContextWrapper;