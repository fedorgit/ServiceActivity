import React, {useState, useEffect, Component} from 'react'
import {FilterForm} from './modules/FilterForm'
import {ActivityForm} from './modules/ActivityForm'
import {ActivityElement} from './modules/ActivityElement'


const App = () => {

    const [activity, setActivity] = useState({})

    const [searchResult, setSearchResult] = useState('You activity')

    return(

        <div className="container">
            <h1 className="text-center my-sm-3">Service for random activity selection</h1>
            <div className="row">

                <div className="col-4">
                    <h2>Filter activity</h2>
                    <FilterForm setActivity={setActivity} setSearchResult={setSearchResult} />
                </div>

                <div className="col-7 offset-1">
                    <h2>{searchResult}</h2>
                    <ActivityElement activity={activity} />
                </div>
            </div>

            <div className="row align-items-center parent-row">
                <div className="col-5 mx-auto">
                    <h2>Did not find it? Add it yourself</h2>
                    <ActivityForm setActivity={setActivity} setSearchResult={setSearchResult} />
                </div>
            </div>

        </div>

    )

}

export default App;