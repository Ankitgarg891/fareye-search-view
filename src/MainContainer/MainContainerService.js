import axios from "axios";

class MainContainerSearvice {
    performSearch = async(searchText)=>{
        var response =  await axios.get(`http://localhost:8786/app/rest/search?searchValue=${searchText}`).then((result)=>{
            console.log("FROM SEARVICE",result.data);
            return result.data.searchEntityList;
        }).catch((error)=>{
            console.log(error);
            return [];
        })
        return response;
    }
}
export const mainContainerSearvice = new MainContainerSearvice();