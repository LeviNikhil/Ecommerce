import "./Modal.css"
function Modal({show,onclose,children}){
    if(show==false) return ;
    //event propagation me parent ka data automatically 
    //child me propagate ho jata hai usko rokne ke liye
    //stop propagation lgate hain 
    return(
        <div className="backdrop" onClick={onclose}>
        <div className="modal" onClick={(event)=> event.stopPropagation()}>
           {children}
        </div>
        </div>
    )
}

export default Modal;