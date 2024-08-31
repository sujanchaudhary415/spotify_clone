export const initialState={
    user:null,
    playlist:[],
    playing:false,
    item:null,
    //token:'BQCxw9W6-08NGJnQoV-HrRMAZFlh0GZeP1qlREvJO9Z3tl_Lh2TU3MEp0_fKIWsqOz_GWCGMrnuYIv1RWi_d_lefycCN6rh96psYqDNYF2nIu4BQzRWVRUbuhvMgu6CzpLZimmrWxeNkUjI08CZ8wkEJd1OGFiK6YepC_epfeqhgy25ZkRVRsIFALq3PM1Ge0EmxKKyQIUKn5BHnP-1EQhgrGroN'
};

const reducer=(state,action)=>{
   console.log(action);

   switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user:action.user,
        };

    case 'SET_TOKEN' :
        return {
            ...state,
            token:action.token,
        };

    case "SET_PLAYLISTS" :
     return {
                 ...state,
                 playlists:action.playlists,
     };    

     case "SET_DISCOVER_WEEKLY":
        return {
             ...state,
             discover_weekly:action.discover_weekly,
        };

        default:
            return state;
           
        
   }
}
export default reducer;