fetch("/read",{
    method:"GET"
})
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})
.catch((e)=>console.log('error'))