import axios from "axios";
import formatDate from "../helpers/formatDate";
import { useState } from "react";
import Content from "./Content";
import EditMode from "./EditMode";

//obje dağıtım yöntemi için ({todo}) kullanıyoruz
const ListItem = ({ todo, setTodos, newTodos   }) => {
  /*   console.log(todo) */

  /* düzenleme modu için useState kullanıyoruz */
  const [isEditMode, setIsEditMode] = useState(false);
  
  //SİLME İŞLEMİ silme butonuna tıklayınca çalışacak kısım
  const handleDelete = () => {
    //veriyi api den sil
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      //veriyi state den sil
      .then(() => setTodos(todos => 
        todos.filter(item => item.id !== todo.id)))
  }

  //form gönderilince çalışır düzenleme işlemi
  /*  const handleSubmit = (e) => {
        e.preventDefault()
        BU ŞEKİLDE KULLANIM FORM GÖNDERİMİNDE SAYFANIN YENİLENMESİNİ ENGELLEMEK İÇİNDİR.
    } */


  const handleEdit = (e) => {
    e.preventDefault();

    //inputlardaki verileri al
    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;

    //api daki ilgili todo yu güncelle
    axios
    .patch(`http://localhost:3000/todos/${todo.id}`, {
        title: newTitle,
        status: newStatus
      })
      //api isteği başarılı olursa arayüzü güncelle
      .then(() => {
        //arayüz güncelle
        //ilk etapta f5 ile veri güncelleniyor
        //arayüzün güncellenmesi istiyorsak state tide güncellemek gerekiyor
        //state deki eski todoyu kaldır yenisini koy
        //güncellenecek todo ya git işlemi
        const updated = { 
          ...todo, 
          title: newTitle,
          status: newStatus
        };
        //dizideki eski todoyu kaldır yenisini koy
        //eğer ki eleman güncellenecek eleman ise
        // o zaman diziye güncel haline ekle
        // değilse dizideki halini koru
        //const newTodos = todos.map((todo) => 
       //todo.id === updated.id ? updated : todo
        //);
        setTodos((newTodos) => {
          return newTodos.map((newTodos) =>
          newTodos.id === updated.id ? updated : newTodos)
        })
        //ekranda güncelleme
        //setTodos(newTodos);
      });

    //düzenleme modunu kapat
    setIsEditMode(false);
  };

  return (
    <li className='relative p-3 list-group-item d-flex justify-content-between align-items-center gap-4'>
      {/*  <span className="badge bg-danger">{todo.status}</span> */}
      {/* getStatus.jsx içindeki todo nun durumuna göre span değerini döndürür renklendirme yaptık seçilen veriye göre */}

      {!isEditMode ? (
        /* isEditMode true ise listeleme html bas */
        <Content
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleDelete={handleDelete}
        />
      ) : (
        /* isEditMode false ise düzenleme html bas */
        <EditMode
          todo={todo}
          setIsEditMode={setIsEditMode}
          handleEdit={handleEdit}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
