import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "reactstrap";

function Task(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.task.name}</h5>
                <p className="card-text">
                    Priority: {props.priority[Math.floor(Math.random() * 5)]}
                    <br/>
                    Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                </p>

                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle outline color="info" caret>
                        ...
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            {props.task.status !== 'todo' &&
                            <button type="button" className="btn btn-link" onClick={() =>
                                props.left(props.task.id)}>Left</button>}</DropdownItem>
                        <DropdownItem>
                            {props.task.status !== 'done' &&
                            <button type="button" className="btn btn-link" onClick={() =>
                                props.right(props.task.id)}>Right</button>}</DropdownItem>
                        <DropdownItem>
                            <button type="button" className="btn btn-link" onClick={() => {
                                props.deleteTask(props.task.id)
                            }}>Delete
                            </button>
                        </DropdownItem>

                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}

export default Task;