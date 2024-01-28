import { useEffect, useState } from 'react'
import Form from './components/form'
import Loader from './components/Loader'
import ListItem from './components/ListItem'
import axios from 'axios' /* kurulum https://www.npmjs.com/package/axios#installing docs sitesi https://axios-http.com/docs/intro  */
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [todos, setTodos]=useState(null)
  const [page, setPage] = useState(1)
  const [maxPageCount, setMaxPageCount] = useState()

  // Bileşen ekrana basılma olayını izler
  /* useEffect(()=>{}) */
  useEffect(()=>{
    //fetch ile api den todo verilerini alma
   /*  
   fetch(`http://localhost:3000/todos`)
    .then((res)=>res.json())
    .then((data)=> setTodos(data))
  */

  //axios ile api den todo verileirni alma
  axios
  .get(`http://localhost:3000/todos`,
  {
    timeout:3000, /* axios zaman özelliği */
    timeoutErrorMessage:`Zaman Aşımı`,

    /* safya başına 5 eleman görmek için localserver özelliği ni kullanıyoruz */
    params:{
      _page: page,
      _per_page: 5,
    },
  })
  .then((res) => {
    setMaxPageCount(res.data.pages)
    setTodos(res.data.data)
  })
  .catch((err) =>{ 
    console.log(err)
  if (err.message === 'Zaman Aşımı'){
  alert("İstek Zaman Aşımına Uğradı")
 }
 });
}, [page]);

  return (
    <div className='container p-3 p-md-5'>
        <ToastContainer />
      {/* <h1>Vite, Json-server, Axios</h1> */}
      <h2 className='text-center'>Server <span className='text-warning'>CRUD</span></h2>

      {/* api den gelen bilgileri ekrandaki forma yazmak için useState güncellemeye yarayan setTodos metodunu form.jsx e prob olarak gönderiyoruz*/}
      <Form setTodos={setTodos}/>

      <ul className='list-group'>
        {/* veriler yoksa loader/yükleniyor bas */}
        {!todos && <Loader />}
        {/* todos? optionel chining */}
        {todos?.map((todo)=>(
          /* todo yu prob olarak gönderiyoruz benzersiz olması için key prob ekliyoruz*/
          <ListItem key ={todo.id} todo = {todo} setTodos={setTodos}/>
        ))}
      </ul>
    <div className='d-flex justify-content-between my-5'>
      <button 
      disabled={page === 1}
      onClick={() => setPage(page-1)} className='btn btn-primary' >{'< Geri'}</button>
      <span>{page}</span>
      <button 
      disabled={page === maxPageCount}
      onClick={() => setPage(page+1)} className='btn btn-primary' >{'> İleri'}</button>
    </div>
    </div>
  )
}

export default App
