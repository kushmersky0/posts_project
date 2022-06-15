//action page


export const getAllUser=(data)=>{
    debugger
    return{type:"GET_ALL_USERS",payload:data}
}
/*----------------------- */
export const loadUsers=(users)=>{
    debugger
    return{type:"LOAD_USERS",payload:users}
}
/************************** */

export const getAllPosts=(data)=>{
    return{type:"GET_ALL_POSTS",payload:data}
}

export const ChangeAddPost=()=>{
    return{type:"CHENGE_ADD_POSTS"}
}

export const AddPostes=(data)=>{
    debugger
    return{type:"ADD_POST",payload:data}
}
