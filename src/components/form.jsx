/* https://www.npmjs.com/package/uuid 
adresinden uuid kurulumu yaparak benzersiz id oluşturabiliriz
import v4 ile aşağıdaki şekilde projeye dahil edebiliriliriz id: v4() ile de benzersiz id yi oluşturabiliriz */
import { v4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';


//axios post isteği için import ediyoruz
import axios from 'axios';
import { toast } from 'react-toastify';

/* react bileşeni oluşturma */
const Form = ({setTodos}) => {

  const handleSubmit = (e) => {
    // sayfanın yenilenmesini engelliyoruz
    e.preventDefault()

    //input ve select alanından formdan gelen verileri alma
  const title = e.target[0].value
  const status = e.target[1].value
  
  // veriyi kontrol et input boş ise
  if (!title) {
    return alert(`Lütfen bir başlık yazınız.`)
  }
  //veri tabanına eklenecek veriyi hazırlama
  const newTodo = {
    title: title,
    status: status,
    id: v4(),
    date: new Date().toLocaleDateString(),
  }
  
  // fetch Oluşturduğumuz todo yu api'ye kayıt etme
  /*  fetch(`http://localhost:3000/todos`,
  {
    method:`POST`, 
    body: JSON.stringify(newTodo),

  })
*/
  //todo yu state e ekle
  // önceki mevcut elemanların üzerine yenisini eklemek için
  // prev veya todos kullanarak aşağıdaki şekilde kodları yazıyoruz
  // setTodos((todos) => [...todos, newTodo])
  // ben burada en başa eklenmesini istediğim için aşağıdaki şekilde yazdım.
  // setTodos((todos) => [newTodo, ...todos])

  //api isteği başarılı olursa newTodo yu state e ekle
  //.then (() => setTodos((todos) => [newTodo, ...todos]))

  //api isteği başarısız olursa (bunu görmek için localhost:3004 yap örnek mantıken 3000 de iken ekrana bastığı halde api ye kayıt yapmıyordu bu şekilde then catch ile bu sorunu çözdük)
  //.catch(()=> alert(`Üzgünüz bir sorun oluştu.`))

  //console.log(title, status, "veri eklendi", newTodo) 
  //} 

  // AXIOS Oluşturduğumuz todo yu api'ye kayıt etme
  axios.post(`http://localhost:3000/todos`, newTodo)
  //api isteği başarılı olursa newTodo yu state e ekle
  .then (() => setTodos((todos) => [...todos, newTodo]))
  toast('Todo eklendi.')
  //api isteği başarısız olursa
  .catch(()=> alert(`Üzgünüz bir sorun oluştu.`))
}
  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-4 my5 mb-2">
      <input
        className="form-control shadow"
        placeholder="Ör:React projesi yap"
        type="text"
      />

      <select className="form-select w-50 shadow">
        <option>Varsayılan</option>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>

      <button className="btn btn-primary shadow">Gönder</button>
    </form>
  );
};

export default Form
