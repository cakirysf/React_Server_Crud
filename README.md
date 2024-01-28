# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- vite kurulumu için dosya içerisinde
npm create vite .
ya da vscode sürükle bırak yaptığımız dosya içerisinde yeni bir dosya içine kuracak isek
nmp create vite klasör_ismi
sonra gelen soruya versiyon sorusu y tıklanır
sonra react seçilir
sonra JavaScript seçilir
sonra nmp install (node modules indirme) 
sonra npm run dev (projeyi aya kaldırma) [react aya kaldırma npm start tı]
terminale yazarak işlemler tamamlanır vite & react logolarının geldiği sayfa açılırsa işlem başarılı demektir.
HIZLI KURULMASININ SEBEBİ
package.json dosyası içindeki geliştirici bağlımlıkların (dependencies) az olması
###
her defasında terminale npm json-server db.json diyerek api dosyasını açmaktansa 
package.json / debug altına / "server":"json-server db.json" yazarak kendi komutumuzu oluşuturabilir ve npm run server ile aynı işlemi terminalde yapabiliriz. yeni terminalde npm run server yazmamız gerekiyor
kısa kod oluşturmaz isek npx json-server db.json yazmamız gerekiyor

#### BOOTSTRAP KURULUMU ####
Yeni bir terminal açılır
npm i bootstrap
main.jsx içerisine import "bootstrap/dist/css/bootstrap.min.css"
yazılır index.css üzerine
daha sonra koyu tema için index.css içindeki ana dizinde bulunan
color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
kodlarını body etiketi içerisine yazarız

### PORT DEĞİŞTİRME ####
package.json / debug altına / "server":"json-server --watch db.json --port 3030"
yazarsak sayfa 3030 portunda çalışır

AXIOS TA BASE URL EKLEME
axios.defaults.baseURL=``http://localhost:3000`
bu şekilde belirleyebirizi kullanırken de
axios
  .get(`/todos`) bu şekilde kullanabiliriz.

  react ve serveri aya kaldırmak için 
  npm run server
  npm run dev
  
--># React_Server_Crud
