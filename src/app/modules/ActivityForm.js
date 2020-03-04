import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import { createActivity } from '../api'



const ActivityForm = (props) => {

    let currentActivity = null;

    const { register, handleSubmit, errors } = useForm();

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')) {
            props.setSearchResult('Not fount activity, simplify your search filter');
        } else {
            props.setSearchResult('Successful creation activity');

            props.setActivity(currentActivity);
        }
            
    }

    const onFailure = () => {

        props.setSearchResult('Error creating activity');
    }

    const onClick = data => {

        data.participants = parseInt(data.participants);

        currentActivity = data;

        createActivity(data, onSuccess, onFailure);
    }

    return(
        <form onSubmit={handleSubmit(onClick)}>
            <div className="form-group row">
                <label>Activity</label>
                <input className="form-control" name="activity" ref={
                    register({
                        validate: value => value.length > 0
                    })
                }/>
                {errors.activity && <span className="text-danger">Activity field cannot be empty</span>}
            </div>

            <div className="form-group row">
                <label>Type</label>
                <select className="form-control" name="type" ref={
                    register({
                        validate: value => value.length > 0
                    })}>
                    <option value=""></option>
                    <option value="education">Education</option>
                    <option value="recreational">Recreational</option>
                    <option value="social">Social</option>
                    <option value="diy">DIY</option>
                    <option value="charity">Charity</option>
                    <option value="cooking">Cooking</option>
                    <option value="relaxation">Relaxation</option>
                    <option value="music">Music</option>
                    <option value="busywork">Busywork</option>
                </select>
                {errors.type && <span className="text-danger">Type field cannot be empty</span>}
            </div>

            <div className="form-group row">
                <label>Participants</label>
                <input type="number" className="form-control" name="participants" ref={
                    register({
                        validate: value => parseInt(value) > 0
                    })
                }/>
                {errors.participants && <span className="text-danger">Participants field cannot be empty. Set the value to greater than 0</span>}
            </div>

            <div className="form-group row">
                <label>Accessibility</label>
                <input className="form-control" name="accessibility" ref={
                    register({
                        validate: value => {
                            let number = parseFloat(value);
                            return number >= 0.0 && number <= 1.0;
                        }
                    })}/>
                {errors.accessibility && <span className="text-danger">Accessibility field cannot be empty. Set value from 0.0 to 1.0</span>}
            </div>

            <div className="form-group row">
                <label>Price</label>
                <input className="form-control" name="price" ref={
                    register({ 
                        validate: value => {
                            let number = parseFloat(value);
                            return number >= 0.0 && number <= 1.0;
                        }
                    })}/>
                {errors.price && <span className="text-danger">Participants field cannot be empty.Set value from 0.0 to 1.0</span>}
            </div>

            <div className="form-group row">
                <button type="submit" className="btn btn-primary">Create</button>
            </div>
        </form>
    )

}

export {ActivityForm};