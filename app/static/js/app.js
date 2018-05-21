Vue.component('app-header', {
  template: `
    <nav class=" navbar-expand-lg fixed-top navbar navbar-dark" style="background-color: #222222;" id="mainNav">
      
        <router-link class="navbar-brand js-scroll-trigger fadeInDown animated" to="/">weconnec </router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse fadeInDown animated" id="navbarResponsive">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li class="nav-item active">
              <router-link class="nav-link js-scroll-trigger" to="/">Home </router-link>
            </li>
            <li v-if="isLoggedIn== false" class="nav-item ">
              <router-link class="nav-link js-scroll-trigger " to="/search"> Search </router-link>
            </li>
          </ul>
          <searchbar v-if="isLoggedIn== true"></searchbar><hr>
                      <div v-if="isLoggedIn== true" class="btn-group ">
                      <router-link v-on:click.native="windowLeave" class="btn btn-secondary" to="/profile"> Profile </router-link>
              <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Logout
              </button>
              <div class="dropdown-menu">
                <p class="dropdown-item" href="#">Are you sure?</p>
                <div class="dropdown-divider"></div>
                <div class="dropdown-item">
                  <button type="button" class="btn btn-secondary" data-dismiss="dropdown">Close</button>
                  <button type="button" @click="logout" class="btn btn-warning" >Logout</button>
                </div>
              </div>
            </div>

          <form v-else class="form-inline " id="loginform" @submit.prevent="loginform" method="POST" enctype="multipart/form-data" novalidate="true">
            <div class="input-group mb-2 mr-sm-2 ">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fas fa-user"></i></div>
              </div>
              <input class="form-control " type="text" name="username" v-model="username" id="username" placeholder="Username" >
              
            </div>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text"><i class="fas fa-lock"></i></div>
              </div>
              <input class="form-control" type="Password" name="plain_password" v-model="plain_password" id="plain_password" placeholder="Password" >
            </div>
              <button type="submit" class="btn mb-2 mr-sm-2">Log in</button>
          </form>
          


          <p class="alert alert-danger" role="alert" v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </p>
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
 computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  },
  methods: {
    loginform:function(e) {
      e.preventDefault();
      let self=this;
      this.errors = [];
      if(!this.username){this.errors.push("Name required.");}
      if(!this.plain_password){this.errors.push("Password required.");}
      
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
          let token = jsonResponse.userdata.token;
          let username=jsonResponse.userdata.user_name;
          let firstname=jsonResponse.userdata.first_name;
          let lastname=jsonResponse.userdata.last_name;
          let joined_on=jsonResponse.joined_on;
          let id=jsonResponse.userdata.id;
          let posts=jsonResponse.userdata.posts;
          let following=jsonResponse.userdata.following;
          let followers=jsonResponse.userdata.followers;
          localStorage.setItem('jwt_token', token);
          localStorage.setItem('username',username);
          localStorage.setItem('firstname',firstname);
          localStorage.setItem('lastname',lastname);
          localStorage.setItem('date_joined',joined_on);
          localStorage.setItem('id',id);
          localStorage.setItem('post',posts);
          localStorage.setItem('following',following);
          localStorage.setItem('followers',followers);
          document.getElementById("loginform").reset();
          self.$router.push('/profile');
        }   
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    logout: function(e){
      e.preventDefault();
        if (localStorage.getItem('jwt_token')!==null){
            let self = this;
            self.token=localStorage.getItem('jwt_token');
            fetch("/api/auth/logout", { 
                method: 'GET',
                headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
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
                        self.$store.dispatch('logout');
                       localStorage.clear();
                        self.$router.push("/");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
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
            <a href="#about-modal" data-toggle="modal">About</a>
            <div class="modal fade" id="about-modal" tabindex="-1" role="dialog" aria-labelledby="title-about" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-about">About</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                   Weconnec intends to resolve the need for a central platform that allows, primarily students to 
                  share resources among themselves. Often times barriers impede how effective study resources are shared
                   among students. One such barrier is association.  Students may not know the right persons 
                   to be affiliated with in order to get helpful resources.  In addition, the project also seeks
                    to enhance how efficient students can manipulate study resources.  "WeConnec" is a web-based 
                    platform that grants users access to a library of documents as well as allow them to share documents 
                    with persons from their friend list after signing up for an account. Users have the option of making 
                    uploaded resources public or private. The platform's main function is to allow users to search through
                     a large pool of documents return relevant information based on the query in a timely manner. 
                     Another function that the project will implement is an answer search engine, this will allow users 
                     to pose a question after which a response, formulated from uploaded documents, will be returned. 
                     This response should have the correct answer for the question or if the engine could not find an 
                     appropriate answer it should suggest some resources that might contain the desired answer. 
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#account-modal" data-toggle="modal">Account</a>
            <div class="modal fade" id="account-modal" tabindex="-1" role="dialog" aria-labelledby="title-account" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-account">Account Details</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    You need to sign in before you can view account information
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#privacy-modal" data-toggle="modal">Privacy Policy</a>
            <div class="modal fade" id="privacy-modal" tabindex="-1" role="dialog" aria-labelledby="title-privacy" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-privacy">Privacy Policy</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    Effective date: May 19, 2018
                      weconnec ("us", "we", or "our") operates the weconnec.xyz website (the "Service").
                      This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy for weconnec is powered by TermsFeed.
                      We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from weconnec.xyz
                      
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#terms-modal" data-toggle="modal">Terms of use</a>
            <div class="modal fade" id="terms-modal" tabindex="-1" role="dialog" aria-labelledby="title-terms" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-terms">Terms of Use</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    Note: Our Terms of Use are changing.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#faq-modal" data-toggle="modal">FAQ</a>
            <div class="modal fade" id="faq-modal" tabindex="-1" role="dialog" aria-labelledby="title-faq" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-faq">FAQ</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    Frequently asked question
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#help-modal" data-toggle="modal">Help</a>
            <div class="modal fade" id="help-modal" tabindex="-1" role="dialog" aria-labelledby="title-help" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-help">Help</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    How to use ?
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#contact-us" data-toggle="modal">Contact us</a>
            <div class="modal fade" id="contact-us" tabindex="-1" role="dialog" aria-labelledby="title-contact" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-contact">Contact us</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    contact form goes here
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="list-inline-item">
            <a href="#more" data-toggle="modal">More</a>
            <div class="modal fade" id="more" tabindex="-1" role="dialog" aria-labelledby="title-more" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title text-muted" id="title-more">More Options</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body text-muted">
                    More options
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </footer>
    `
});

Vue.component('card', {
  template: `
<div class="container py-3">
    <div class="card slideInUp animated">
      <div class="row ">
        <div class="col-sm-2">
            <img src="http://www.proher-natura.com/e-commerce/themes/images/icon-pdf.png" alt="Card image cap">
          </div>
          <div class="col-md-8 px-2">
            <div class="card-block px-2">
              <h3><a href="card-title">{{title}}</a></h3>
              <p  class="card-text "><small>

              Tags: <span v-for="tag in this.tags" class="badge badge-secondary">{{tag}}</span>
              </small>

              </p>
    
              <p class="card-text">{{caption}}</p>
              <p class="card-text"><small class="text-muted">Posted By: @{{username}} on {{date_post}}</small><p v-if="this.username===this.user"></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  `,props:{
    id:String,
    title:String,
    username:String,
    date_post:String,
    tags:Array,
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
});

Vue.component('searchbar', {
  template: `
  <form  id="searchform" @submit.prevent="searchform" method="POST" enctype="multipart/form-data">
            <div id="custom-search-input" class=" slideInRight animated">
                <div class="input-group col-md-12 ">
                <input class="form-control input-lg" type="text" name="search" v-model="search" id="search"  >
                    <span class="input-group-btn">
                        <button class="btn btn-info btn-lg" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </span>
                </div>
        </div>
        </form>
  `,data:function(){
    return {
      posts: [],
      errors:[],
      search:''
    }
  },

  methods:{ 
    searchform: function(e) {
        e.preventDefault();
        let self = this;
        self.errors = [];
        let form_data = new FormData();
        if(self.search){form_data.append('search',self.search);}
        fetch("/api/search", { 
        method: 'GET',
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
        // get list of post results and display on search page
        console.log(jsonResponse);
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
        <div class="section-heading text-center slideInRight wow animated">
          <h2>Ask a Question or search for a document by title or content.</h2>
        </div>
          <div class="col-md-8 mx-auto">
          <searchbar></searchbar>
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
            
            <hr>
            <card  v-for="post in posts"
              v-bind:key="post.id"
              v-bind:title="post.title" 
              v-bind:caption="post.caption"
              v-bind:date_post="post.date_post"
              v-bind:photo="post.photo"
              v-bind:tags="post.tags"
              v-bind:username="post.username">
            </card>
          </div>
      </div>
    </section>
        `,
  data:function(){
    return {
      posts: [
{ id: 1, title: 'My journey with Vue',caption:'It is so easy',date_post:'Feb 2018',photo:'https://vuejs.org/images/logo.png' ,username:'__me__',tags:['this','is','a','tag']},
      { id: 3, title: 'Why Vue is so fun',caption:'You just plug and go',date_post:'Mar 2018',photo:'https://react-etc.net/files/2015-11/danguu.jpg' ,username:'__me__',tags:['this','is','a','tag']} 
     ],
      errors:[],
      messages:[],
      search:''
    }
  }
    
});


const Home = Vue.component('home',{
  template:`
  
  <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
          
            <div class="header-content mx-auto  ">
              <h1 class="mb-5 flipInY wow animated">'weconnec' is platform for students to gain access to a library of publicly or privately shared documents.</h1>
              <button type="button" class="btn bounceInUp animated btn-outline-light " data-target="#about-modal" data-toggle="modal">Learn More</button>
              <button type="button" class="btn bounceInUp wow animated btn btn-outline-warning" data-toggle="modal" data-target="#register-modal">Register Now</button>
            
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

        <div class="modal fade" id="register-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

              <div class="modal-header">
                <p class="modal-title text-muted" id="exampleModalLongTitle">Fill in the appropriate information to Register</p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            <div class="modal-body">
            <p class="alert alert-success" role="alert" v-if="messages.length">
              <ul>
                <li v-for="message in messages">{{ message }}</li>
              </ul>
            </p>
            <p class="alert alert-danger" role="alert" v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </p>
            
            <form id="registerform" @submit.prevent="registerform" method="POST" enctype="multipart/form-data" novalidate="true">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="first_name ">First Name</label>
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
                <small id="passwordHelpBlock" class="form-text text-muted">Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.</small>
              </div>
            <div class="form-group col-md-6">
              <label for="conf_password">Confirm Password</label>
              <input class="form-control" type="password" name="conf_password" v-model="conf_password" id="conf_password" placeholder="Confirm Password" >
            </div>
          </div>
          <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="sumbit" class="btn btn-warning" >Register</button>
              </div>
              </form>
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
      if(this.first_name && this.last_name && this.email && this.plain_password && this.conf_password){return true;} 
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
            console.log(jsonResponse.messages); 
            self.messages.push(jsonResponse.messages);
          }; 
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
});

// Vuex State Management for user authentication
const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem("jwt_token")
  },
  actions:{
    logout() {
      localStorage.removeItem("jwt_token");
    }
  }
});

// Define Routes
const router = new VueRouter({
    routes: [
    { path: "/", component: Home },
    { path: "/search", component: Search }
    ]
});

// Instantiate our main Vue Instance
let app = new Vue({
    el: "#app",
    router,store
});