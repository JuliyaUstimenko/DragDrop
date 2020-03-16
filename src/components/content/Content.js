import React from 'react';
import ListBox from './boxes/ListBox';
import Context from './context'
import AddInput from './boxes/AddInput';


function Content() {
  const [lists, setLists] = React.useState([
    {id: 1,completed: false, title: 'dog'},
    {id: 2,completed: false, title: 'apple'},
    {id: 3,completed: false, title: 'table'},
  ])
  

  function toggleList(id) {
 setLists(
   lists.map(list => {
      if(list.id === id) {
        list.completed = !list.completed
      }
      return list
    })
 )
  } 
  
  function removeList(id) {
    setLists(lists.filter(list => list.id !== id))
  }

  function addInput (title){
    setLists(
      lists.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])

    )
  }
  
  return (
    <Context.Provider value={{removeList: removeList}}>
    <div className="wrapper">
      <h1 id="word">Add words!</h1>
      <AddInput onCreate={addInput}/>

      {lists.length ? (
      <ListBox lists={lists} onToggle={toggleList}/> 
      ) : (
        <p>No lists !</p>
      )}
    </div>
    </Context.Provider>
  );
}

export default Content;


