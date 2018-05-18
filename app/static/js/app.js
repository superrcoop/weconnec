Vue.component('app-header', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      
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
        <router-link class="navbar-brand js-scroll-trigger" to="/">weconnec </router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li class="nav-item active">
              <router-link class="nav-link js-scroll-trigger" to="/">Home </router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link js-scroll-trigger" to="/search"> Search </router-link>
            </li>
          </ul>
          <form class="form-inline " id="loginform" @submit.prevent="loginform" method="POST" enctype="multipart/form-data">
            
            <div class="input-group mb-2 mr-sm-2 ">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fas fa-user"></i></div>
              </div>
              <input class="form-control" type="text" name="username" v-model="username" id="username" placeholder="Username" >
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fas fa-lock"></i></div>
              </div>
              <input class="form-control" type="Password" name="plain_password" v-model="plain_password" id="plain_password" placeholder="Password" >
            </div>
              <button type="submit" class="btn btn-light mb-2 mr-sm-2">Log in</button>
          </form>
        
      </div>
    </nav>
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

Vue.component('app-footer', {
  template: `
    <footer>
      <div class="container">
        <p>&copy; weconnec 2018. All Rights Reserved.</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="#">Account</a>
          </li>
          <li class="list-inline-item">
            <a href="#">About</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Privacy &amp; Terms</a>
          </li>
          <li class="list-inline-item">
            <a href="#">Help</a>
          </li>
          <li class="list-inline-item">
            <a href="#">FAQ</a>
          </li>
          <li class="list-inline-item">
            <a href="#">More</a>
          </li>
        </ul>
      </div>
    </footer>
    `
});

const Description = Vue.component('description', {
  template: `
    <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Amazing Features</h2>
          <p >Check out what you can do with this platform</p>
          <hr>
        </div>
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup ipad_pro portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="img/demo-screen-1.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                  <i class="fas fa-mobile-alt"></i>
                    <h3>Mobile Friendly</h3>
                    <p >Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="far fa-comments"></i>
                    <h3>Chat</h3>
                    <p >Put an image, video, animation, or anything else in the screen!</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="fas fa-search"></i>
                    <h3>Refined Search</h3>
                    <p >As always, this theme is free to download and use for any purpose!</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="fas fa-graduation-cap"></i>
                    <h3>Huge library of resources</h3>
                    <p >Since this theme is MIT licensed, you can use it commercially!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   `
});

Vue.component('card', {
  template: `
  <div class="card">
    <img class="card-img-top" src="http://success-at-work.com/wp-content/uploads/2015/04/free-stock-photos.gif"  alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <p><i class="fa fa-tags"></i> Tags: <a href=""><span class="badge badge-info">#waves</span></a> <a href=""><span class="badge badge-info">#CSS</span></a> <a href=""><span class="badge badge-info">#Vue.js</span></a></p>
      <p class="card-text">{{caption}} </p>
      <p class="card-text"><small class="text-muted">Posted By: @{{username}} on {{date_post}}</small></p>
    </div>
    <p v-if="this.username===this.user">
      <button @click="delete_post" class="fas fa-trash-alt float-right"></button>
    </p>
  </div>
  `,props:{
    id:String,
    title:String,
    username:String,
    date_post:String,
    tags:String,
    caption:String,
    photo:String
  },
  data:function(){
    return {
      isLiked:this.liked,
      user:localStorage.getItem('username'),
      post_id:this.id
    }
  }
  ,methods:{
  delete_post:function(){
    let self= this;
    var payload = {
      post_id: self.id,
      username:self.username
    };
    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );
    console.log(payload,data);
    fetch("/api/posts/delete", { 
      method: 'POST',
      body:payload,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
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
          console.log(jsonResponse);
          console.log("Deleted");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
});


const Search =Vue.component('search', {
    template: `
    <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center slideInLeft wow animated">
          <h2>Search</h2>
          <p >Ask a Question or search for a document by title or content..</p>
        </div>
        <div class="row">
          <div class="col-md-8 mx-auto">
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
            <form  id="searchform" @submit.prevent="searchform" method="POST" enctype="multipart/form-data">
            <div id="custom-search-input" class=" fadeInUp animated">
                <div class="input-group col-md-12 ">
                <input class="form-control input-lg" type="text" name="search" v-model="search" id="search" placeholder="search" >
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </span>
                </div>
        </div>
        </form><hr>
          <div class="card-columns"><hr>
            <card  v-for="post in posts"
              v-bind:key="post.id"
              v-bind:title="post.title" 
              v-bind:caption="post.caption"
              v-bind:date_post="post.date_post"
              v-bind:photo="post.photo"
              v-bind:username="post.username">
            </card>
            </div>
          </div>
        </div>
      </div>
    </section>
        `,
  data:function(){
    return {
      posts: [
{ id: 1, title: 'My journey with Vue',caption:'It is so easy',date_post:'Feb 2018',photo:'https://vuejs.org/images/logo.png' ,username:'__me__'},
      { id: 3, title: 'Why Vue is so fun',caption:'You just plug and go',date_post:'Mar 2018',photo:'https://react-etc.net/files/2015-11/danguu.jpg' ,username:'__me__'} 
     ],
      errors:[],
      messages:[],
      search:''
    }
  },
      
    searchform: function () {
        let self = this;
        self.errors = [];
        let form_data = new FormData();
        if(self.search){form_data.append('search',self.search);}
        fetch("/api/posts/new", { 
        method: 'POST',
        body: form_data,
        headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
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
        if(jsonResponse.messages) {
        self.messages.push(jsonResponse.messages);
      }
        console.log(jsonResponse);
      }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
});


const Home = Vue.component('home',{
  template:`
  
  <header class="masthead">
      <div class="container h-100">
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

        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto  ">
              <h1 class="mb-5 flipInY wow animated">'weconnec' is platform for students to gain access to a library of publicly or privately shared documents.</h1>
              <router-link class="btn bounceInUp animated btn-outline-light " to="/description"> Learn More</router-link>
              <button type="button" class="btn bounceInUp wow animated btn-outline btn-xl" data-toggle="modal" data-target="#exampleModalCenter">Register Now</button>
            
            </div>
                          </div>

          <div class="col-lg-5 my-auto fadeInRightBig wow animated">
            <div class="device-container">
              <div class="device-mockup macbook_2015 silver ">
                <div class="device">
                  <div class="screen">
                    <img src="img/demo-screen-1.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          <form id="registerform" @submit.prevent="registerform" method="POST" enctype="multipart/form-data" novalidate="true">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="first_name">First Name</label>
              <input class="form-control" type="text" name="first_name" v-model="first_name" id="fname" placeholder="First Name" >
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Last Name</label>
              <input class="form-control" type="text" name="last_name" v-model="last_name" id="lname" placeholder="Last Name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="email">Email</label>
              <input class="form-control" type="email" name="email" v-model="email" id="email" placeholder="Email" >
            </div>
            <div class="form-group col-md-6">
              <label for="username">Username</label>
              <input class="form-control" type="text" name="username" v-model="username" id="username" placeholder="Username" >
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="plain_password">Password</label>
              <input class="form-control" type="Password" name="plain_password" v-model="plain_password" id="plain_password" placeholder="Password" >
              <small id="passwordHelpBlock" class="form-text text-muted">
          Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </small>
            </div>
            <div class="form-group col-md-6">
              <label for="conf_password">Confirm Password</label>
              <input class="form-control" type="password" name="conf_password" v-model="conf_password" id="conf_password" placeholder="Confirm Password" >
            </div>
          </div>
          
          </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="sumbit" class="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
`,
  data: function(){
    return{
      errors:[],
      messages:[],
      username:null,
      first_name:null,
      last_name:null,
      email:null,
      plain_password:null,
      conf_password:null
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


const Profile = Vue.component('profile',{
  template:`
    <div class="container fadeIn animated">
      <div class="row">
        <div class="col-md-8">
          <h1 class="my-4">Page Heading
            <small>Secondary Text</small>
          </h1>
        <div class="col-md-4">
          <div class="card my-4">
            <h5 class="card-header">Search</h5>
            <div class="card-body">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button">Go!</button>
                </span>
              </div>
            </div>
          </div>
          <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">Web Design</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">Freebies</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card my-4">
            <h5 class="card-header">Side Widget</h5>
            <div class="card-body">
              You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
            </div>
          </div>
          <div class="card-columns"><hr>
            <card  v-for="post in posts"
              v-bind:key="post.id"
              v-bind:title="post.title" 
              v-bind:caption="post.caption"
              v-bind:date_post="post.date_post"
              v-bind:photo="post.photo"
              v-bind:username="post.username">
            </card>
            </div>
            <ul class="pagination justify-content-center mb-4">
            <li class="page-item">
              <a class="page-link" href="#">&larr; Older</a>
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">Newer &rarr;</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>`,
    data:function(){
    return {
      posts: [
{ id: 1, title: 'My journey with Vue',caption:'It is so easy',date_post:'Feb 2018',photo:'https://vuejs.org/images/logo.png' ,username:'__me__'},
      { id: 3, title: 'Why Vue is so fun',caption:'You just plug and go',date_post:'Mar 2018',photo:'https://react-etc.net/files/2015-11/danguu.jpg' ,username:'__me__'} 
     ],
      errors:[],
      messages:[]
    }
  }
});

// Define Routes
const router = new VueRouter({
    routes: [
    { path: "/", component: Home },
    { path: "/search", component: Search },
    { path: "/description", component: Description }
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router
});