Vue.component('app-header', {
    template: `
    <nav class=" navbar-dark bg-dark navbar navbar-expand-lg fixed-top">
      <a class="navbar-brand" href="#">weconnec</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to="/api/upload"> Upload Form </router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to=""> Profile </router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to=""> Resources </router-link>
          </li>
          </ul>
            <form class="navbar-form my-2 my-lg-0 form-inline" role="form">
              <div class="form-group">
                <label class="sr-only" for="Email">Email</label>
                <input type="email" class="form-control mr-sm-2" id="Email" placeholder="Email" autofocus required />
              </div></br>
              <div class="form-group">
                <label class="sr-only" for="Password">Password</label>
                <input type="password" class="form-control mr-sm-2" id="Password" placeholder="Password" required />
              </div>
              <button type="submit" class="btn btn-outline-success my-2 my-sm-0">Sign in</button>
            </form>
          <button type="button" class="btn btn-outline-secondary my-2 my-sm-0">Register</button>
          
        </div>
      </div>
    </nav>
    `
});

Vue.component('app-footer', {
    template: `
    
<div class="copyright">
  <div class="container">
    <div class="col-md-6">
      <p>© 2016 - weconnec</p>
    </div>
    <div class="col-md-6">
      <ul class="bottom_ul">
        <li><a href="#">webenlance.com</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Faq's</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Site Map</a></li>
      </ul>
    </div>
  </div>
</div>
    `
});

Vue.component('search', {
    template: `
  
<div class="container">
  <div class="row">
    <div class="col-md-12">
            <div class="input-group" id="adv-search">
                <input type="text" class="form-control" placeholder="Search" />
                <div class="input-group-btn">
                    <div class="btn-group" role="group">
                        <div class="dropdown dropdown-lg">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="caret"></span></button>
                            <div class="dropdown-menu dropdown-menu-right" role="menu">
                                <form class="form-horizontal" role="form">
                                  <div class="form-group">
                                    <label for="filter">Filter by</label>
                                    <select class="form-control">
                                        <option value="0" selected>All Snippets</option>
                                        <option value="1">Featured</option>
                                        <option value="2">Most popular</option>
                                        <option value="3">Top rated</option>
                                        <option value="4">Most commented</option>
                                    </select>
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Author</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <div class="form-group">
                                    <label for="contain">Contains the words</label>
                                    <input class="form-control" type="text" />
                                  </div>
                                  <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                                </form>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                    </div>
                </div>
            </div>
          </div>
        </div>
  </div>
</div>`
});


const Home = Vue.component('home',{
  template:`
  <div class="top_cont_outer">
    <div class="top_cont_inner">
      <div class="container">
        <div class="top_content">
          <div class="row">
            <div class="col-lg-5 col-sm-7">
              <div class="top_left_cont flipInY wow animated">
                <h3>Weconnec</h3>
                <h2>Connecting students everywhere</h2>
                <p> Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. </p>
                <a href="#service" class="learn_more2">Learn more</a> </div>
            </div>
            <div class="col-lg-7 col-sm-5"> </div>
          </div>
        </div>
      </div>
    </div>
    
      </div>



`,
  data: function(){
    return{
    }
  }
});


const Register = Vue.component('registration',{
  template:`
  <div class="agile_ihj">
      <form id="registerform" @submit.prevent="registerform" method="POST" enctype="multipart/form-data" novalidate="true">
      <h2>Join Photogram today</h2>
      <p class="alert alert-danger" role="alert" v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>

      
        <div class="agileinfo">
          <input type="text" name="first_name" v-model="first_name" id="fname" placeholder="First Name" >
        </div>
        <div class="agileinfo">
          <input type="text" name="last_name" v-model="last_name" id="lname" placeholder="Last Name">
        </div>
        <div class="agileinfo">
          <input type="text" name="username" v-model="username" id="username" placeholder="Username" >
        </div>
        <div class="agileinfo">
          <input type="email" name="email" v-model="email" id="email" placeholder="Email" >
        </div>
        <div class="agileinfo">
          <input type="Password" name="plain_password" v-model="plain_password" id="plain_password" placeholder="Password" >
        </div>
        <div class="agileinfo">
          <input type="password" name="conf_password" v-model="conf_password" id="conf_password" placeholder="Confirm Password" >
        </div>
        <div class="agileinfo">
          <input type="text" name="location" v-model="location" id="location" placeholder="Location" >
        </div>
        <div class="agile_par">
          <p>Already had an Account please <router-link to="/login">Login</router-link></p>
        </div>
        <div class="w3l_but">
          <button type="submit">REGISTER</button>
        </div>
      </form>
      
      <div class="clear"></div>
    </div>



<div class="card">
<article class="card-body">
  <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
  <hr>
  <p class="text-success text-center">Some message goes here</p>
  <form>
  <div class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
     </div>
    <input name="" class="form-control" placeholder="Email or login" type="email">
  </div> <!-- input-group.// -->
  </div> <!-- form-group// -->
  <div class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
     </div>
      <input class="form-control" placeholder="******" type="password">
  </div> <!-- input-group.// -->
  </div> <!-- form-group// -->
  <div class="form-group">
  <button type="submit" class="btn btn-primary btn-block"> Login  </button>
  </div> <!-- form-group// -->
  <p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
  </form>
</article>
</div> <!-- card.// -->

`,
  data: function(){
    return{
      errors:[],
      username:null,
      first_name:null,
      last_name:null,
      email:null,
      plain_password:null,
      conf_password:null,
      location:null
    }
  },
  methods: {
    checkForm:function(e) {
      if(this.first_name && this.last_name && this.location && this.email && this.plain_password && this.conf_password){return true;} 
      this.errors = [];
      if(!this.first_name){this.errors.push("First name required.");}
      if(!this.last_name){this.errors.push("Last name required.");}
      if(!this.email){this.errors.push("Email required.");}
      if(!this.plain_password){this.errors.push("Password required.");}
      if(!this.conf_password){this.errors.push("Confirm your password");}
      if(!this.location){this.errors.push("Location required.");}
      e.preventDefault();
    },
    registerform:function(e) {
      e.preventDefault();
      this.errors = [];
      let self=this;
      
      let uploadForm = document.getElementById('registerform');
      let form_data = new FormData(uploadForm);
      fetch('/api/users/register', {
        method: 'POST',
        body: form_data,
        headers: { 
            'X-CSRFToken': token
          },
          credentials: 'same-origin'
      })
        .then(function (response) {
          if (!response.ok) {
    throw Error(response.statusText);
  }
     return response.json();
        })
        .then(function (jsonResponse) {
          if(jsonResponse.errors) {
            console.log(jsonResponse.errors);
            self.errors.push(jsonResponse.errors);
          }else{

          console.log(jsonResponse.data);
           console.log(jsonResponse.message); 
          self.$router.push('/login');
          };
          
      })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
});


const Login = Vue.component('login',{
  template:`
  <div class="agile_ihj">
      <form id="loginform" @submit.prevent="loginform" method="POST" enctype="multipart/form-data" >
      <h2>Log in to Photogram</h2>
      <p v-if="errors.length">
    <p class="alert alert-danger" role="alert" v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  <p class="alert alert-success" role="alert" v-if="messages.length">
    <ul>
      <li v-for="message in messages">{{ message }}</li>
    </ul>
  </p>
      
       <div class="agileinfo">
          <input type="text" name="username" v-model="username" id="username" placeholder="Username" >
        </div>
       <div class="agileinfo">
          <input type="Password" name="plain_password" v-model="plain_password" id="plain_password" placeholder="Password" >
        </div>
        <div class="agile_par">
          <p>Dont have an Account? <router-link class="nav-link" to="/register">Register Now</router-link></p>
        </div>
        <div class="w3l_but">
          <button type="submit">LOGIN</button>
        </div>
      </form>
      
      <div class="clear"></div>
      </div>
`,
 data:function(){
  return {
    errors:[],
    messages:[],
    username:'',
    plain_password:''
  }
 },
  methods: {
    loginform:function(e) {
      e.preventDefault();
      this.errors = [];
      if(!this.username){this.errors.push("Name required.");}
      if(!this.plain_password){this.errors.push("Password required.");}
      let self=this;
      let loginForm = document.getElementById('loginform');
      let form_data = new FormData(loginForm);
      fetch('/api/auth/login', {
        method: 'POST',
        body: form_data,
        headers: { 
            'X-CSRFToken': token
          },
          credentials: 'same-origin'
      })
        .then(function (response) {
          if (!response.ok) {
    throw Error(response.statusText);

  }
     return response.json();
        })
        .then(function (jsonResponse) {
          if(jsonResponse.errors) {
            self.errors.push(jsonResponse.errors);
          }else{
          console.log(jsonResponse.messages);
          let token = jsonResponse.user_credentials[8];
          let username=jsonResponse.user_credentials[3];
          let location=jsonResponse.user_credentials[6];
          let firstname=jsonResponse.user_credentials[4];
          let lastname=jsonResponse.user_credentials[5];
          let joined_on=jsonResponse.user_credentials[7];
          let id=jsonResponse.user_credentials[9];
          let posts=jsonResponse.user_credentials[0];
          let following=jsonResponse.user_credentials[1];
          let followers=jsonResponse.user_credentials[2];
          localStorage.setItem('jwt_token', token);
          localStorage.setItem('username',username);
          localStorage.setItem('location',location);
          localStorage.setItem('firstname',firstname);
          localStorage.setItem('lastname',lastname);
          localStorage.setItem('date_joined',joined_on);
          localStorage.setItem('id',id);
          localStorage.setItem('post',posts);
          localStorage.setItem('following',following);
          localStorage.setItem('followers',followers);
          window.location = "/dashboard";
          }
          
      })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
});


// Define Routes
const router = new VueRouter({
    routes: [
    { path: "/", component: Home },
        { path: "/register", component: Register },
        { path: "/login", component : Login}
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});