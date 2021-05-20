
import React, { createContext, useState } from 'react'

import './App.css';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import FormHook from './components/FormHook';
import ItemHook from './components/ItemHook';
import Effecthook from './components/Effecthook';
import MouseEventEffect from './components/MouseEventEffect';
import DataFetch from './components/DataFetch';
import DataFetchById from './components/DataFetchById';
import ComponentC from './components/ComponentC';


export const UserContext = createContext()
export const LanguageContext = createContext()
function App() {
  const [user, setUser] = useState({ name: 'hoge', age: '44' })
  const [language, setLanguage] = useState('english')
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider>
      <DataFetchById />
      <DataFetch />
      {/* <MouseEventEffect /> */}
      <Effecthook />
      <ItemHook />
      <FormHook />
      <CounterHook />
      <Counter />
    </div>
  );
}

export default App;
