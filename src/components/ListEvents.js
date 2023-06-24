import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import eventservice from '../services/eventservice'

const ListEvents = () => {

    const [events, setevents] = useState([])
    useEffect(() => {

      getAllEvents();
  }, [])

  const getAllEvents = () => {
      eventservice.getAllEvents().then((response) => {
          setevents(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const deleteEvent = (eventId) => {
    eventservice.deleteEvent(eventId).then((response) =>{
     getAllEvents();

    }).catch(error =>{
        console.log(error);
    })
     
 }
return(
<> <div class="container"> {events.map(event=>(
<div class="card">
  <div class="card-image">
    <img src={event.url}/>
  </div>
  <div class="card-text">
   
    <h2 class="card-title">{event.title}</h2>
<div class="box">
    <p class="card-body">DATE: {event.date}</p>
    <p class="card-body">LOCATION: {(event.location)} </p>
    </div>
  <hr/>
  
 
   
<Link className="btn btn-info" to={`/edit-event/${event.id}`} ><button className="btn btn-default">Update</button></Link>
                                    <button class="btn btn-default" onClick = {() => deleteEvent(event.id)}> Delete</button><div>
                                            <br/>
                <a href="#"><button type="button"className="btn-default block">view</button></a>
            </div>
</div>
</div>
))
}
</div>

 
<div className="add-event">
<Link className="btn btn-info" to ="/add-event">
<button  className="btn btn-default">Add Event</button>
 
</Link>
</div>


</>
)
}
export default ListEvents;