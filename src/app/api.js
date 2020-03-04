

const getActivity = (filter, onSuccess, onFailure) => {

    const url = 'https://www.boredapi.com/api/activity?' + filter;

    fetch(url, {
        method: 'GET',
        mode: 'cors'
    })
    .then(response => {

        if(response.ok){
            return response.json();
        } else {
            console.log('Error');
        }

        

    })
    .then(data => onSuccess(data))
    .catch(error => onFailure())
}


const createActivity = (activity, onSuccess, onFailure) => {

    const url = 'https://www.boredapi.com/api/suggestion';

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity)
    })
    .then(response => {

        if(response.ok){
            return response.json();
        } else {
            console.log('Error');
        }
    })
    .then(data => onSuccess(data))
    .catch(error => onFailure())
}

export { getActivity, createActivity }