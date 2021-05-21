
import React, { createContext, useState, useReducer } from 'react'

import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import Effecthook from './components/Effecthook';
import MouseEventEffect from './components/MouseEventEffect';
import DataFetch from './components/DataFetch';
import DataFetchById from './components/DataFetchById';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import CounterReducer from './components/CounterReducer';
import DataFetchWithReducer from './components/DataFetchWithReducer';
import WrapComponent from './components/WrapComponent';
import Check from './components/Check';
import FocusInput from './components/FocusInput';
import CounUp from './components/CounUp';
import DocTitleUpdateOne from './components/DocTitleUpdateOne';
import DocTitleUpdateTwo from './components/DocTitleUpdateTwo';
import Form from './components/Form';

const initialState = {
  firstCounter: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement1':
      return { ...state, firstCounter: state.firstCounter - action.value }

    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CountContext = createContext()
export const UserContext = createContext()
export const LanguageContext = createContext()
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [user, setUser] = useState({ name: 'hoge', age: '44' })
  const [language, setLanguage] = useState('english')
  return (
    <div className="App">
      <Form />
      <DocTitleUpdateOne />
      <DocTitleUpdateTwo />
      <CounUp />
      <FocusInput />
      <Check />
      <WrapComponent />
      <DataFetchWithReducer />
      <h1>{count.firstCounter}</h1>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }} >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
        </LanguageContext.Provider>
      </UserContext.Provider>
      <DataFetchById />
      <DataFetch />
      <MouseEventEffect />
      {/* <Effecthook /> */}
      <ItemHook />
      <FormHook />
      <CounterHook />
      <Counter />
    </div>
  );
}

export default App;
