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
            <router-link class="nav-link" to=""> About</router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to=""> Upload </router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to=""> Profile </router-link>
          </li>
          <li class="nav-item ">
            <router-link class="nav-link" to=""> Resources </router-link>
          </li>
          
          </ul>
            <form class="navbar-form my-2 my-lg-0 form-inline" role="form">
    <label class="sr-only" for="inlineFormInputGroupUsername2">username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="username">
  </div>


  <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Password">
  </div>
             
              <button type="submit" class="btn btn-outline-light mb-2">Sign in</button>
            </form>
          
        </div>
      </div>
    </nav>
    `
});

Vue.component('app-footer', {
    template: `
    <footer class="navbar fixed-bottom">
        <div class="container">
            <p>Copyright &copy; weconnec</p>
        </div>
    </footer>
    `
});

Vue.component('search', {
    template: `
    <section id="Search">
    <h2>Search</h2>
    <div class="container">
  <div class="row">
        <div class="col-md-12 ">
            <div class="input-group">
  <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Ask a question or search for a document or phrase/quote eg. What is a neural network? or How do fishes breathe? ">
  <div class="input-group-append">
    <button type="button" class="btn btn-outline-secondary">Search</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <span class="sr-only">Toggle Dropdown</span> Advanced
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
</div>
        </div>
  </div>
</div>
  </section>
  

  
        `
});


const Home = Vue.component('home',{
  template:`
  <section class="top_cont_outer">
    <div class="top_cont_inner">
      <div class="container">
        <div class="top_content">
          <div class="row">
            <div class="col-lg-5 col-sm-7">
              <div class="top_left_cont flipInY wow animated">
                <h3>Weconnec</h3>
                <h2>Connecting students everywhere</h2>
                <p> Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum. </p>
                <a href="#service" role="button" class="btn btn-primary">Learn more</a> 
                
<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Register Now
</button></div>
            </div>
            <div class="col-lg-7 col-sm-5"> </div>
          </div>
        </div>
        
<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Fill in the appropriate information to Register</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="" class="form-control" id="inputEmail4" placeholder="">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="" class="form-control" id="inputPassword4" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Username</label>
      <input type="" class="form-control" id="inputPassword4" placeholder="">

    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Password</label>
      <input type="" class="form-control" id="inputEmail4" placeholder="Password">
      <small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Confirm Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Confirm Password">
    </div>
  </div>
  
  </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
      </section>

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