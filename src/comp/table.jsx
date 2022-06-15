
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../usersAndPosts/UsersAndPostAxios";
import { getAllUser } from "../usersAndPosts/UsersAndPostActions"
import { Link, useHistory } from "react-router-dom";
import { loadUsers } from "../usersAndPosts/UsersAndPostActions"
import { red } from '@mui/material/colors';


export default function BasicTable() {

  let users
  const [temp, settemp] = useState([])

  //יצירת החיבור של ה-redux
  let dis = useDispatch();

  //משתנה מסוג מצביע
  let nameRef = useRef()
  let emailRef = useRef()


  let his = useHistory()

  //שמירה ב-STATE
  //useSelector-מתעדכן עם כל שינוי
  let AllUsers = useSelector(store => {
    return store.user.users;
  })

  useEffect(() => {
    debugger
    async function fetchData() {
      if (AllUsers.length == 0 || AllUsers == undefined) {
        users = await getAllUsers()
        debugger
        settemp(users)
        console.log(users);
        dis(loadUsers(users))
      }
    }
    fetchData();
  }, []);

  //דחיפה של הקומפ עים שרשור של
  //id
  // של הנוכחי
  const SeePosts = (id) => {
    debugger
    his.push({ pathname: "/To_see_your_posts/" + id })
  }

  //חיפוס לפי מייל
  const FindByEmail = () => {
    debugger
    let e = emailRef.current.value
    let a = AllUsers.filter(x => x.email.includes(e))
    settemp(a)
  }


  //חיפוס לפי שם
  const FindByName = () => {
    debugger;
    let n = nameRef.current.value
    let a = AllUsers.filter(x => x.name.includes(n))
    settemp(a)
  }

  return (
    <>
      <input type="text" placeholder="find by email" ref={emailRef} onChange={FindByEmail} align="center"/>
      <input type="text" placeholder="find by name" ref={nameRef} onChange={FindByName} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >name</TableCell>
              <TableCell>email</TableCell>
              <TableCell >company name</TableCell>
              <TableCell >posts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {temp.map((row) => (
              <TableRow>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.company.name}</TableCell>
                <TableCell >
                  <button onClick={() => { SeePosts(row.id) }}>To see your posts</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const myStyle={
  "align":"center",
  "color":"red"
}