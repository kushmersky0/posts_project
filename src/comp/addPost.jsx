import { Link } from "@mui/icons-material"
import { ChangeAddPost } from "../usersAndPosts/UsersAndPostActions"
import { AddPostes } from "../usersAndPosts/UsersAndPostActions"



export const AddPost = (props) => {
    debugger
        const add = (e) => {
        debugger
        e.preventDefault();
        AddPostes({
            title: e.target.title.value,
            body: e.target.body.value
        });
       alert("thank you")
    }

    return <>
        <p>add post to:</p>
        {
            props.match.params.id
        }
        <form onSubmit={e => add(e)} >
            <input type="text" placeholder="input title" id="title"></input>
            <input type="text" placeholder="input body" id="body"></input>
            <input type="submit" ></input>
        </form>
    </>
}