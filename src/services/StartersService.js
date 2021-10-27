import axios from "axios";

const STARTERS_API_BASE_URL = "http://localhost:8081/api";

class StartersService {

    getStarters(){
        return axios.get(STARTERS_API_BASE_URL+"/allstarters");
    }

    createStarter(starters){
        return axios.post(STARTERS_API_BASE_URL+"/addstarters",starters);
    }
    
    getStartersById(id){
        return axios.get(STARTERS_API_BASE_URL+"/starters/"+id);
    }

    updateStarter(starters,id){
        console.log(id)
        return axios.put(STARTERS_API_BASE_URL+"/starters/"+id,starters);
    }

    deleteStarter(id){
        return axios.delete(STARTERS_API_BASE_URL+"/starters/"+id);
    }

}

export default new StartersService()