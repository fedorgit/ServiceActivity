import React, {useState, useEffect, Component} from 'react'
import { useForm } from "react-hook-form";
import {getActivity} from '../api'


const FilterForm = (props) => {

    const defaulActivity = {
        activity: '',
        key: '',
        type: '',
        participants: '',
        accessibility: '',
        price: ''
    }


    const { register, handleSubmit, errors } = useForm();

    const onSuccess = (data) => {

        if(data.hasOwnProperty('error')){
            props.setSearchResult('Not fount activity, simplify your search filter');
            props.setActivity(defaulActivity);
        } else {
            props.setSearchResult('You activity');
            props.setActivity(data);
        }
            
    }

    const onFailure = () => {

        props.setSearchResult('Error receiving activity');
    }

    const onChange = data => {

        let param = '';

        for(let item in data){
            param += data[item] ? item + '=' + encodeURIComponent(data[item]) + '&' : '';
        }

        getActivity(param, onSuccess, onFailure);
    }

    return(
        <form onSubmit={handleSubmit(onChange)}>

            <div className="form-group row">
                <label>Key</label>
                <input type="number" className="form-control" name="key" ref={register({ min: 1000000, max: 9999999 })}/>
                {errors.key && <span className="text-danger">Set value from 1000000 to 9999999</span>}
            </div>

            <div className="form-group row">
                <label>Type</label>
                <select className="form-control" name="type" ref={register}>
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
            </div>

            <div className="form-group row">
                <label>Participants</label>
                <input type="number" className="form-control" name="participants" ref={register({ min: 0 })}/>
                {errors.participants && <span className="text-danger">Set the value to greater than 0</span>}
            </div>

            <div className="form-group row">
                <label>Accessibility</label>
                <input className="form-control" name="accessibility" ref={
                    register({
                        validate: value => {
                            let number = parseFloat(value);
                            return (number >= 0.0 && number <= 1.0) || value === '';
                        }
                    })}/>
                {errors.accessibility && <span className="text-danger">Set value from 0.0 to 1.0</span>}
            </div>

            <div className="form-group row">
                <label>Price</label>
                <input className="form-control" name="price" ref={
                    register({ 
                        validate: value => {
                            let number = parseFloat(value);
                            return (number >= 0.0 && number <= 1.0) || value === '';
                        }
                    })}/>
                {errors.price && <span className="text-danger">Set value from 0.0 to 1.0</span>}
            </div>

            <div className="form-group row">
                <button type="submit" className="btn btn-primary">Selection</button>
            </div>
        </form>
    )

}

export {FilterForm};