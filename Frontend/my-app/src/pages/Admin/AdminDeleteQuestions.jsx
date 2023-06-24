import React, { useEffect, useState } from 'react'
import axios from "axios"
import {
    Box,
    Button,
    Center,
    Icon,
    Image,
    Select,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
  } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
// MdDelete
import { MdDelete } from "react-icons/md";
import { data } from './data';
export const AdminDeleteUsers = () => {
  const [data,setData] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData= async()=>{
      try {
        const res = await axios.get("https://reqres.in/api/users")
        console.log(res.data.data)
        setData(res.data.data)
      } catch (error) {
        console.log(error)
      }
  }

  const deleteAdmin= async(id)=>{
    axios.delete(`https://reqres.in/api/users${id}`).then((res)=>{
      alert("Deleted Successfully!")
      getData()
      console.log(res)
    }).catch((err)=>{
      alert(err)
    })
  }
  return (
   <div style={{ height: "84vh", width: "85vw" }}>
      {/* <Heading textAlign='center'>All Products Data</Heading> */}
      {/* <br/> */}
      <Center>
        <Select
          placeholder="Select Category"
        //   onChange={(e) => {
        //     setEndPoint(e.target.value);
        //     setPage(1);
        //   }}
        >
          <option value="Mern">Mern</option>
          <option value="Node">Node</option>
          <option value="Java">Java</option>
        </Select>
      </Center>
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
            <Th>S.No.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              {/* <Th>Level</Th>
              <Th>Category</Th>
              <Th>Role</Th> */}
            </Tr>
          </Thead>
          <Tbody>
            {
                data?.map((el)=>(
                    <Tr key={el.id}>
                    <Td>{el.id}.</Td>
                        <Td>{el.first_name}</Td>
                        <Td>{el.email}</Td>
                        {/* <Td>1</Td>
                        <Td>Mern</Td>
                        <Td>User</Td> */}
                        <Td>
                        <Center>
                            <Button
                            onClick={()=>{deleteAdmin(el.id)}}
                            colorScheme="red"
                            >
                            <MdDelete />
                            </Button>
                        </Center>
                        </Td>
                    </Tr>
                ))
            }
          </Tbody>
        </Table>
      </TableContainer>
      
    </div>
  )
}


