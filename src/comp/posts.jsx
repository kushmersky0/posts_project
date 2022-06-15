import { getAlpost } from "../usersAndPosts/UsersAndPostAxios"
import { getAllPosts } from "../usersAndPosts/UsersAndPostActions"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as React from 'react';
import { AddPost } from "../comp/addPost"
import { ChangeAddPost } from "../usersAndPosts/UsersAndPostActions"
import { Link, useHistory } from "react-router-dom";


export const Posts = (props) => {

    let posts
    const [addp, setaAddp] = React.useState(false);

    //יצירת החיבור של ה-redux
    let dis = useDispatch();

    let his = useHistory()

    //קריאה מהשרת
    useEffect(() => {
        debugger
        async function fetchData() {
            if (AllPosts.length == 0 || AllPosts == undefined) {
                debugger
                posts = await getAlpost()
                console.log(posts);
                dis(getAllPosts(posts));
            }
        }
        fetchData();
    }, []);

    //הפרמטר שהועבר בכתובת ה-URL
    console.log(props.match.params.id);


    //שמירה ב-STATE
    //useSelector-מתעדכן עם כל שינוי
    let AllPosts = useSelector(store => {
        return store.user.posts;
    })
    console.log(AllPosts);

    let Add = useSelector(store => {
        return store.user.AddPost;
    })

    //סינון השורות 
    let ueserPost = AllPosts.filter((x) => x.userId == props.match.params.id)


    //propsכ idופותח את הקומפ' של הוספה שולח את ה storבעת לחיצה הופך את המשתנה ששמור ב
    const AddPost = () => {
        debugger
        setaAddp(!addp)
        his.push({ pathname: "/Add_Post/" + props.match.params.id })
        debugger
    }


    return <>
        <table>
            <tr>
                <th>title</th>
                <th>body</th>
            </tr>
            {
                ueserPost != undefined &&
                ueserPost.length > 0 &&
                ueserPost.map((item) => {
                    return (
                        <>
                            <tr>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        </>)
                })

            }
        </table>
        <button onClick={AddPost} align="center">AddPost</button>
    </>
}    