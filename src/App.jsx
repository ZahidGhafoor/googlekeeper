import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';


import "./app.scss"

const App = () => {
    const[addItem, setAddItem] = useState([])

    const addNote = (note) => {
        setAddItem((prevData)=>{
            return[...prevData, note ];
        });
        

    };

    const onDelete = (id) => {
        setAddItem((olddata) =>
        olddata.filter((currdata, indx) => {
            return indx !== id;
        })
        );
    };
    return (
        <>
            <Header />
            <div className="data">
            <CreateNote passNote = {addNote} />
       { addItem.map((val, index)=>{
           return <Note 
           key={index}
           id={index}
           title={val.title}
           content={val.content}
           deleteItem = {onDelete}
           
           />
        })}
        </div>
        <Footer />

        </>
    );
};
export default App; 