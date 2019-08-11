import React from 'react';
import GlobalStyle from "./Styles/global";
import Header from "./Components/Header";
import Board from "./Components/Board";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function App() {
  return ( 
    <DndProvider backend={HTML5Backend}>
    <Header/>
    <Board/>


    <GlobalStyle/> 
    </DndProvider>
  );
}

export default App;
