import axios from 'axios'

const base_url='http://localhost:8080/api/events'

class eventservice{
  
    getAllEvents(){
        return axios.get(base_url);
    }
     createEvent(event){
        return axios.post(base_url,event);
     }
    

    getEventById(eventId){
        return axios.get(base_url + '/' + eventId);
    }

    updateEvent(eventId, event){
        return axios.put(base_url + '/' +eventId, event);
    }

    deleteEvent(eventId){
        return axios.delete(base_url + '/' + eventId);
    }
}
export default new eventservice();
