import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
 },
 input: {
     marginRight: '1rem'
 }

}

function ItemBox ({list, index, onChange}) {
    const { removeList} = useContext(Context)
    const classes = []


    if (list.completed) {
        classes.push('done')
    }
    return (
    <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input
             type='checkbox'
             checked={list.completed}
             style={styles.input} 
             onChange={() => onChange(list.id)}/>
            <strong>{index + 1}</strong>
            &nbsp;
   {list.title}
        </span>
        <button className='rm' onClick={removeList.bind(null, list.id)}>&times;</button>
        
    </li>
    )
}

// обращаемся к функции prop-types
ItemBox.propTypes = {
    list: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}


export default ItemBox;