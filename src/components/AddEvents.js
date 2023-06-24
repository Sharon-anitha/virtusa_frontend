import React, {useState, useEffect} from 'react'
import {Link,  useHistory, useParams } from 'react-router-dom';

import eventservice from '../services/eventservice';

const AddEvents = () => {
    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [speaker, setSpeaker] = useState('')
    const [price, setPrice] = useState('')
    const history =  useHistory();
    const {id} = useParams();

    const saveOrUpdateEvent = (e) => {
        e.preventDefault();

        const event = {url,title,date,location,speaker,price}

        if(id){
          eventservice.updateEvent(id, event).then((response) => {
            console.log(response.data);
            history.push('/events')
            }).catch(error => {
                console.log(error)
            })

        }else{
            eventservice.createEvent(event).then((response) =>{

                console.log(response.data)
    
                history.push('/events');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        eventservice.getEventById(id).then((response) =>{
            setUrl(response.data.url)
            setTitle(response.data.title)
            setDate(response.data.data)
            setLocation(response.data.location)
            setSpeaker(response.data.speaker)
            setPrice(response.data.price)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const value = () => {

        if(id){
            return <h2 className = "text-center">Update Event</h2>
        }else{
            return <h2 className = "text-center">Add Event</h2>
        }
    }

    return (
        <div>
           <br /><br />
          
                <div className = "img-section card">
                    <div className = "form-card">
                       {
                           value()
                       }
                        <div className = "form-card-body">
                            <form>
                            <div className = "form-group ">
                                    <label htmlFor= "url"> Image </label>
                                    <input
                                        type = "text"
                                        placeholder = "Provide url for the image"
                                        name = "url"
                                        className = "form-control"
                                        value = {url}
                                        onChange = {(e) => setUrl(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group">
                                    <label htmlFor= "title"> Title </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the event title"
                                        name = "title"
                                        className = "form-control"
                                        value = {title}
                                        onChange = {(e) => setTitle(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group ">
                                    <label htmlFor= "date"> Date </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the date in dd-mm-yyyy"
                                        name = "date"
                                        className = "form-control"
                                        value = {date}
                                        onChange = {(e) => setDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group">
                                    <label htmlFor = "location"> Location </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter the location"
                                        name = "location"
                                        className = "form-control"
                                        value = {location}
                                        onChange = {(e) => setLocation(e.target.value)}
                                    >
                                    </input>
                                </div>
                                
                                <div className = "form-group">
                                    <label htmlFor= "speaker">Speaker </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter speaker name"
                                        name = "speaker"
                                        className = "form-control"
                                        value = {speaker}
                                        onChange = {(e) => setSpeaker(e.target.value)}
                                    >
                                    </input>
                                </div>

                                
                                <div className = "form-group">
                                    <label htmlFor= "price"> Price </label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(Number(e.target.value))}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-default" onClick = {(e) => saveOrUpdateEvent(e)} >Submit </button>
                                <Link to="/events" className="btn btn-default" style={{marginLeft:20+'px'}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

    
    )
}

export default AddEvents;
