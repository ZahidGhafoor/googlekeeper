import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {


        const { name, value } = event.target;

        setNote((prevData) => {

            return {
                ...prevData,
                [name]: value,
            };

        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });

    };

    const Expandit =()=>{
        setExpand(true);
    }
    const btonormal =()=>{
        setExpand(false);
    }




    return (
        <>
            <div className="main_note" onDoubleClick={btonormal}>
                <form>
                    {expand ?
                        <input value={note.title} onChange={InputEvent} name="title" type="text" placeholder="Title" autoComplete="off" /> : null}


                    <textarea value={note.content} onChange={InputEvent} name="content" columns="" rows="" placeholder="Write a Note" autoComplete="off" 
                    onClick={Expandit}>

                    </textarea>

                    {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button> : null}


                </form>
            </div>

        </>
    );
};
export default CreateNote; 





// import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';


// const CreateNote = (props) => {

//     const [expand, setExpand] = useState(false);

//     const [note, setNote] = useState({
//         title: "",
//         content: "",
//     });

//     const InputEvent = (event) => {


//         const { name, value } = event.target;

//         setNote((prevData) => {

//             return {
//                 ...prevData,
//                 [name]: value,
//             };

//         });
//     };

//     const addEvent = () => {
//         props.passNote(note);
//         setNote({
//             title: "",
//             content: "",
//         });

//     };

//     const Expandit =()=>{
//         setExpand(true);
//     }
//     const btonormal =()=>{
//         setExpand(false);
//     }




//     return (
//         <>
//             <div className="main_note" onDoubleClick={btonormal}>
//                 <form>
//                     {expand ?
//                         <input value={note.title} onChange={InputEvent} name="title" type="text" placeholder="Title" autoComplete="off" /> : null}


//                     <textarea value={note.content} onChange={InputEvent} name="content" columns="" rows="" placeholder="Write a Note" autoComplete="off" 
//                     onClick={Expandit}>

//                     </textarea>

//                     {expand ?
//                     <Button onClick={addEvent}>
//                         <AddIcon className="plus_sign" />
//                     </Button> : null}


//                 </form>
//             </div>

//         </>
//     );
// };
// export default CreateNote; 


