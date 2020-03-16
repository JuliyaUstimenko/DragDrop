import React from "react";
import PropTypes from 'prop-types';
import ItemBox from './ItemBox';

 

//добавляем стиль корневому элементу
const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
}
//преобразовуем массив
function ListBox (props) {
     return (
         <ul style={styles.ul}>
            {props.lists.map((list, index) => {
                return (< ItemBox
                list={list} 
                key={list.id} 
                index={index} 
                onChange={props.onToggle}
             />
                )
            })}
         </ul>
     )
 }

 ListBox.propTypes = {
     lists: PropTypes.arrayOf(PropTypes.object).isRequired,
     onToggle: PropTypes.func.isRequired
    
 }

 

 export default ListBox;