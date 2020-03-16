import React from 'react';

//drag & drog
class Navbar extends React.Component {
    state = {
        drags: [
            {name:"apple", category:"fruit"},
            {name:"table", category:"house"},
            {name:"carrot", category:"vegetable"},
        ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataMove.setData("id",id);
    }

    onDragOver = (ev) => {
        ev.preventDafault();
    }

    onDrop = (ev, cat) => {
        let id = ev.dataMove.getData("id");

        let drags = this.state.drags.filter((drag) => {
            if (drag.name === id) {
                drag.category = cat;
            }
            return drag;
        });
        this.setState({
            ...this.state,
            drags
        });
    }
    render() {
        let drags = {
            fruit:[],
            vegetable:[],
            house: []
        }
        this.state.drags.forEach ((d) => {
            drags[d.category].push(
                <div key={d.name}
                onDragStart = {(e) => this.onDragStart(e, d.name)}
                draggable
                className="box2">
                    {d.name}
                </div>
            )
        })
        return (
            <div className="box-dnd">
                <div className="box1">
                    <span className="drag-header">fruit</span>
                    {drags.fruit}
                </div>
                <div className="box2"
                 onDragOver={(e)=>this.onDragOver(e)}
                 onDrop={(e) =>this.onDrop(e,"house")}>
                    <span className="drag-header">house</span>
                    {drags.house}
                </div>
                <div className="box3">
                    <span className="drag-header">vegetable</span>
                    {drags.vegetable}
                </div>
            </div>
        )
    }
}


export default Navbar;