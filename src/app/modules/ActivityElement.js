
import React, {useState, useEffect, Component} from 'react'

const ActivityElement = (props) => {


    const createTable = (activity) => {
        let elements = [];
    
        for (let id in activity) {
            elements.push(
                <div key={id} className="form-group row">
                    <label className="col-sm-2 col-form-label">{id}</label>
                    <div className="col-sm-10">
                        <input type="text" readOnly className="form-control-plaintext" value={ activity[id] }/>
                    </div>
                </div>
            )
        }

        return elements;

    }

    return(
        <div>
            { createTable(props.activity) }
        </div>  
    )

}

export {ActivityElement};