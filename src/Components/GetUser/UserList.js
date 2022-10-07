import React, { useState, useEffect } from "react";
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
import axios from "axios";
import AddUser from "../AddUser/AddUser";
import "./style.css";
export default function UserList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        axios
            .get("https://reqres.in/api/users")
            .then((res) => {
                setData(res.data.data);
                console.log("get======>", res);
            })
            .catch((error) => {
                throwerror;
            });
    };
    return (
        <>
            <AddUser />
            <TableContainer>
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">UserName</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <img
                                        src={row.avatar}
                                        alt="avatar"
                                        style={{ height: 50, width: "50px" }}
                                    />
                                </TableCell>
                                <TableCell align="center">{row.id}</TableCell>
                                <TableCell align="center" >
                                    {row.first_name}
                                    {row.last_name}
                                </TableCell>
                                <TableCell align="center" > {row.email}</TableCell>
                            </TableRow>
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}