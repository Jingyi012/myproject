<template>
  <!-- <h1>Hello, Vue!</h1>
  <p>This is a simple Vue application.</p> -->
  <div class="main">
    <my-nav-bar></my-nav-bar>
    <my-content></my-content>
  </div>

  <my-footer></my-footer>
</template>


<script>
export default {
  name: 'App',
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Main styles */
.main {
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%);
  background-position: center;
  background-size: cover;
  height: 90vh;
  display: flex;
  flex-direction: column;
}

/* Navbar styles */
.navbar {
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
}

.menu {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu ul {
  list-style: none;
  display: flex;
}

.menu ul li {
  margin-left: 30px;
}

.menu ul li a {
  text-decoration: none;
  color: #fff;
  font-family: Arial;
  font-weight: bold;
  transition: 0.4s ease-in-out;
}

.menu ul li a:hover {
  color: #ff7200;
}

.search {
  display: flex;
  align-items: center;
}

.srch {
  font-family: 'Times New Roman';
  width: 150px;
  height: 30px;
  background: transparent;
  border: 1px solid #ff7200;
  color: #fff;
  border-right: none;
  font-size: 16px;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}

.btn {
  width: 80px;
  height: 30px;
  background: #ff7200;
  border: 2px solid #ff7200;
  color: #fff;
  font-size: 15px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  color: #000;
}

.btn:focus {
  outline: none;
}

.srch:focus {
  outline: none;
}

/* Content styles */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 20px;
}

.content h1 {
  font-family: 'Times New Roman';
  font-size: 55px;
  letter-spacing: 2px;
}

.content span {
  color: #ff7200;
  font-size: 65px;
}

.content .par {
  padding-bottom: 25px;
  font-family: Arial;
  letter-spacing: 1.2px;
  line-height: 30px;
}

.content .cn {
  width: 200px;
  height: 40px;
  background: #ff7200;
  border: none;
  margin-bottom: 10px;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: .4s ease;
}

.content .cn a {
  text-decoration: none;
  color: #000;
  transition: .3s ease;
}

.cn:hover {
  background-color: #fff;
  transform: scale(0.9) translateX(15px) translateY(15px);
}

/* Footer styles */
.footer {
  width: 100%;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.footer p {
  margin: 10px 0;
}

.icon {
  width: 50px;
  height: 50px;
  border-radius: 35%;
  background-color: rgb(3, 58, 6);
  /* This makes the image round */
  overflow: hidden;
  /* This ensures the image stays within the rounded border */
}

.logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* This ensures the image covers the entire space */
}
</style>
