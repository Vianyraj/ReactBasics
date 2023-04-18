import axios from "axios"
import React from "react"


function Apps(){
    const getJole = () => {
        axios.request({method:"POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            id: '2',
            title: 'Williams'
          }
        }).then(
            (e) => {
                console.log("post",e,"post")
            }
        )
        axios.request({method:"PUT",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: {
            id: '2',
            title: 'Williams'
          }
        }).then(
            (e) => {
                console.log("put",e,"put")
            }
        )
        axios.request({method:"DELETE",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        // data: {
        //     id: '1',
        //     title: 'Williams'
        //   }
        }).then(
            (e) => {
                console.log("delete",e,"delete")
            }
        )
        axios.request({method:"GET",
        url: "https://jsonplaceholder.typicode.com/todos",
        }).then(
            (e) => {
                console.log("get",e,"get")
            }
        )
    }
    
    return(
        <div>
            <button onClick={getJole}> Get Joke</button>
        </div>
    )
}
export default Apps