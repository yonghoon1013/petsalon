"use client"
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function Test() {
    const [data, setData] = useState();

    const testGet = async () => {
        await axios.get(`/api/member`)
        .then(res=>{
            setData(res.data)
        })
    }
    console.log(data)


    useEffect(()=>{
        testGet();
    }, [])

    const inputTest = async (e) => {
        e.preventDefault();
        let formData =  new FormData(e.target);
        let objData = Object.fromEntries(formData);
        console.log(objData)

        await axios.post(`/api/member`, objData);
    }

    const deleteTest = async (e) => {
        e.preventDefault();
        await axios.delete(`/api/member?id=${"hmmm"}&password=${"12345"}`);
    }

    const modifyTest = async (e) => {
        e.preventDefault();
        await axios.put(`/api/member`, {id: "hmmm", password:"12345", mId:"yessss"});
    }



    // if(!data) return <>로딩중</>

    return (
    <section>
        Test
        <form onSubmit={inputTest}>
            <input name='id'/>
            <input name='password'/>
            <input name='desc'/>
            <button>넣기테스트</button>
        </form>
        <button onClick={deleteTest}>지우기테스트</button>
        <button onClick={modifyTest}>수정테스트</button>
        </section>
    )
}

export default Test