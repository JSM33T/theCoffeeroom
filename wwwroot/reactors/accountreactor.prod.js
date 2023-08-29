const routerViewElement=document.querySelector("router-view");const BaseComponent={template:`\n <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"href="/"data-bs-toggle="tooltip"data-bs-placement="left"title="Back to home"><i class="ai-home"></i></a>\n <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-1 px-lg-1 bg-secondary">\n <div class="w-100 mt-auto fade-in"style="max-width: 526px;">\n <div class="row g-4 pb-xl-2 pt-5 mt-3 pb-xxl-3">\n \n <div class="col-md-12">\n <div class="card h-100 border-0 rounded-5">\n <div class="card-body pb-3">\n <h3 class="h4">Login</h3>\n <p class="mb-0">Alrready have an account? Do log in</p>\n </div>\n <div class="card-footer border-0 pt-3 mb-3">\n <router-link class="btn btn-icon btn-sm btn-outline-primary stretched-link"to="/account/login"><i class="ai-arrow-right"></i></router-link>\n </div>\n </div>\n </div>\n \n <div class="col-md-6">\n <div class="card h-100 border-0 rounded-5">\n <div class="card-body pb-3">\n <h3 class="h4">Sign Up</h3>\n <p class="mb-0">Don't have an account? do sign up.</p>\n </div>\n <div class="card-footer border-0 pt-3 mb-3">\n <router-link class="btn btn-icon btn-sm btn-outline-primary stretched-link"to="/account/signup"><i class="ai-arrow-right"></i></router-link>\n </div>\n </div>\n </div>\n <div class="col-md-6">\n <div class="card h-100 border-0 rounded-5">\n <div class="card-body pb-3">\n <h3 class="h4">Recover Account</h3>\n <p class="mb-0">Don't have an account? do sign up.</p>\n </div>\n <div class="card-footer border-0 pt-3 mb-3">\n <router-link class="btn btn-icon btn-sm btn-outline-primary stretched-link"to="/account/accountrecovery"><i class="ai-arrow-right"></i></router-link>\n </div>\n </div>\n </div>\n </div>\n \n <p class="w-100 fs-sm pt-5 mb-5"style="max-width: 526px;"><span class="text-muted">thecoffeeroom.in</span></p>\n <div class="w-50 bg-size-cover bg-repeat-0 bg-position-center"style="background-image: url(/assets/images/covers/login.jpg);">\n </div>\n </div>\n </div>\n `,data(){return{}},async mounted(){this.$initToggle();window.scrollTo({top:0,behavior:"smooth"})},methods:{}};const LoginComponent={template:`\n <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"href="/"data-bs-toggle="tooltip"data-bs-placement="left"title="Back to home"><i class="ai-home"></i></a>\n <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">\n <div class="w-100 mt-auto fade-in"style="max-width: 526px;">\n <div class="ms-auto pb-4"><router-link class="btn btn-sm btn-secondary ripple"to="/account"><i class="ai-user ms-n1 me-2"></i>Menu</router-link><router-link class="btn btn-sm btn-secondary ripple mx-2"to="/account/signup"><i class="ai-user ms-n1 me-2"></i>Signup</router-link></div>\n \n <form class="needs-validation"id="loginForm"novalidate>\n <div class="pb-3 mb-3">\n <div class="position-relative">\n <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <input class="form-control form-control-lg ps-5"v-model="username"@keyup.enter="submitLogin"type="text"placeholder="Username or email"value=""autocomplete="off"required>\n </div>\n </div>\n \n <div class="mb-4">\n <div class="position-relative"><i class="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <div class="password-toggle">\n <input class="form-control form-control-lg ps-5"v-model="password"@keyup.enter="submitLogin"type="password"placeholder="Password"autocomplete="password"value=""required="">\n <label class="password-toggle-btn"aria-label="Show/hide password">\n <input class="password-toggle-check"type="checkbox"><span class="password-toggle-indicator"></span>\n </label>\n </div>\n </div>\n </div>\n \n \n <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">\n <form-check class="my-1">\n <input class="form-check-input"type="checkbox"id="keep-signedin"disabled>\n <label class="form-check-label ms-1"for="keep-signedin">Keep me signed in (id)</label>\n </form-check><router-link class="fs-sm fw-semibold text-decoration-none my-1"to="/account/accountrecovery">Forgot password?</router-link>\n </div>\n <button class="btn btn-lg btn-primary w-100 mb-4 fade-in-delay"type="button"v-on:click="submitLogin"><span v-html="buttonText"></span></button>\n \n </form>\n </div>\n \n <p class="w-100 fs-sm pt-5 mt-auto mb-5"style="max-width: 526px;"><span class="text-muted">thecoffeeroom.in</span></p>\n \n <div class="w-50 bg-size-cover bg-repeat-0 bg-position-center"style="background-image: url(/assets/images/covers/login.jpg);"></div>\n </div>\n `,data(){return{buttonText:"Log In",username:"",password:""}},async mounted(){this.$initToggle();this.username="";this.password="";window.scrollTo({top:0,behavior:"smooth"})},methods:{submitLogin(){this.buttonText='<span class="spinner-grow spinner-grow-sm me-2"role="status"aria-hidden="true"></span>Logging In...';const details={UserName:this.username,PassWord:this.password};const token=document.querySelector('input[name="__RequestVerificationToken"]').value;axios.defaults.headers.common["RequestVerificationToken"]=token;axios.post("/api/account/login",details).then((response=>{toaster("success","Logging in..");let prevlink=localStorage.getItem("prev_link");if(prevlink!==""&&prevlink!==undefined&&prevlink!=="/account/login"){window.location.href=prevlink}else{window.location.href="/"}})).catch((error=>{toaster("error",error.response.data)})).finally((()=>{this.buttonText="Log In"}))}}};const SignupComponent={template:`\n <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"href="/"data-bs-toggle="tooltip"data-bs-placement="left"title="Back to home"><i class="ai-home"></i></a>\n \n <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5 fade-in">\n <div class="w-100 mt-auto"style="max-width: 526px;">\n <div class="ms-auto pb-4"><router-link class="btn btn-sm btn-secondary ripple"to="/account"><i class="ai-user ms-n1 me-2"></i>Menu</router-link><router-link class="btn btn-sm btn-secondary ripple mx-2"to="/account/login"><i class="ai-user ms-n1 me-2"></i>Login</router-link></div>\n <form id="signUpForm">\n <div class="row row-cols-1 row-cols-sm-2">\n <div class="col mb-4">\n <input class="form-control form-control-lg"name="firstname"v-model="firstname"type="text"placeholder="First Name"required maxlength="20">\n </div>\n <div class="col mb-4">\n <input class="form-control form-control-lg"name="lastname"v-model="lastname"type="text"placeholder="Last Name"required maxlength="20">\n </div>\n <div class="col mb-4">\n <input class="form-control form-control-lg"type="text"name="username"v-model="username"placeholder="Preferred UserName"required maxlength="20">\n </div>\n </div>\n <div class="pb-3 mb-3">\n <div class="position-relative">\n <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <input name="email"type="email"v-model="email"@keyup.enter="submitSignup"class="form-control form-control-lg ps-5 bindenter"placeholder="Email"maxlength="50"/>\n </div>\n </div>\n <div class="row row-cols-1 row-cols-sm-2 pb-2 mb-2">\n <div class="position-relative pb-4">\n <div class="password-toggle">\n <i class="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <input name="password"type="password"@keyup.enter="submitSignup"v-model="password"class="form-control form-control-lg ps-5 bindenter"placeholder="Password"maxlength="20"/>\n <label class="password-toggle-btn"aria-label="Show/hide password">\n <input class="password-toggle-check"type="checkbox"><span class="password-toggle-indicator"></span>\n </label>\n </div>\n </div>\n <div class="position-relative">\n \n <div class="password-toggle">\n <input name="passconfirm"v-model="passconfirm"class="form-control form-control-lg ps-5"type="password"placeholder="Password"required="">\n <label class="password-toggle-btn"aria-label="Show/hide password">\n <input class="password-toggle-check"type="checkbox"><span class="password-toggle-indicator"></span>\n </label>\n </div>\n </div>\n </div>\n <button class="btn btn-lg btn-primary w-100 mb-4 fade-in-delay"type="button"@keyup.enter="submitSignup"v-on:click="submitSignup"><span v-html="buttonText"></span></button>\n </form>\n </div>\n \n <p class="w-100 fs-sm pt-5 mt-auto mb-5"style="max-width: 526px;"><span class="text-muted">thecoffeeroom.in</span></p>\n `,data(){return{buttonText:"Sign Up",username:"",password:"",passconfirm:"",firstname:"",lastname:"",email:""}},async mounted(){this.$initToggle();window.scrollTo({top:0,behavior:"smooth"})},methods:{submitSignup(){if(this.firstname==""){toaster("error","first name is mandatory!!")}else if(this.username==""){toaster("error","username is mandatory!!")}else if(this.password!==this.passconfirm){toaster("error","passwords dont match!!")}else{this.buttonText='<span class="spinner-grow spinner-grow-sm me-2"role="status"aria-hidden="true"></span>Signing Up...';const details={FirstName:this.firstname,LastName:this.lastname,UserName:this.username,Password:this.password,EMail:this.email};const token=document.querySelector('input[name="__RequestVerificationToken"]').value;axios.defaults.headers.common["RequestVerificationToken"]=token;axios.post("/api/account/signup",details).then((response=>{console.log(response.data);toaster("success",response.data.message)})).catch((error=>{toaster("error",error.response.data)})).finally((()=>{this.buttonText="Sign Up";this.lala="Sign Up"}))}}}};const PasswordReset={template:`\n <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"href="/"data-bs-toggle="tooltip"data-bs-placement="left"title="Back to home"><i class="ai-home"></i></a>\n <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5 fade-in">\n <div class="w-100 mt-auto"style="max-width: 526px;">\n <div class="ms-auto pb-4"><router-link class="btn btn-sm btn-secondary ripple"to="/account"><i class="ai-user ms-n1 me-2"></i>Menu</router-link></div>\n <form class="needs-validation">\n <div class="pb-3 mb-3">\n <div class="position-relative">\n <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <input class="form-control form-control-lg ps-5"v-model="email"@keyup.enter="passReset"type="text"placeholder="Username or email":readonly="isReadOnly">\n </div>\n </div>\n <div v-if="showOtpPanel">\n <div class="position-relative fade-in">\n <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <input class="form-control form-control-lg ps-5"ref="otpBox"v-model="otp"@keyup.enter="loginViaOtp"type="text"placeholder="OTP"maxlength="6">\n </div>\n <button class="btn btn-lg btn-primary w-100 pt-3 mt-4 mb-4"type="button"v-on:click="loginViaOtp">Log In</span></button>\n </div>\n <div v-else>\n <button class="btn btn-lg btn-primary w-100 mb-4"type="button"v-on:click="passReset"><span v-html="buttonText"></span></button>\n </div>\n </form>\n </div>\n <p class="w-100 fs-sm pt-5 mt-auto mb-5"style="max-width: 526px;"><span class="text-muted">thecoffeeroom.in</span></p>\n \n <div class="w-50 bg-size-cover bg-repeat-0 bg-position-center"style="background-image: url(/assets/images/covers/login.jpg);"></div>\n </div>\n `,data(){return{buttonText:"Send Recovery Key",stringRec:"",password:"",showOtpPanel:false,email:""}},async mounted(){this.$initToggle();window.scrollTo({top:0,behavior:"smooth"})},methods:{passReset(){if(this.email==""){toaster("error","please enter your username or email!!")}else{this.buttonText='<span class="spinner-grow spinner-grow-sm me-2"role="status"aria-hidden="true"></span>Loading...';const details={StringRec:this.email};const token=document.querySelector('input[name="__RequestVerificationToken"]').value;axios.defaults.headers.common["RequestVerificationToken"]=token;axios.post("/api/account/recover",details).then((response=>{toaster("success",response.data);this.showOtpPanel=true;this.isReadOnly=true;this.$refs.otpBox.focus()})).catch((error=>{toaster("error",error.response.data)})).finally((()=>{this.buttonText="Send Recovery Key"}))}},loginViaOtp(){const loginDeets={otp:this.otp,username:this.email};const token=document.querySelector('input[name="__RequestVerificationToken"]').value;axios.defaults.headers.common["RequestVerificationToken"]=token;axios.post("/api/account/loginviaotp",loginDeets).then((response=>{toaster("success",response.data);window.location.href="/profile/security"})).catch((error=>{toaster("error",error.response.data)})).finally((()=>{this.buttonText="Login"}))}}};const Loginviaotp={template:`\n <a class="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4"href="/"data-bs-toggle="tooltip"data-bs-placement="left"title="Back to home"><i class="ai-home"></i></a>\n <div class="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5 fade-in-pop">\n <div class="w-100 mt-auto"style="max-width: 526px;">\n <h1>Password Reset</h1>\n <form class="needs-validation"id="passReset"novalidate>\n <div class="pb-3 mb-3">\n <div class="position-relative">\n <i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <input class="form-control form-control-lg ps-5"v-model="newpass"@keyup.enter="submitLogin"type="text"placeholder="Username or email"required>\n </div>\n </div>\n <div class="mb-4">\n <div class="position-relative">\n <i class="ai-lock-closed fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>\n <div class="password-toggle">\n <input class="form-control form-control-lg ps-5"v-model="password"@keyup.enter="submitLogin"type="password"placeholder="Password"required>\n <label class="password-toggle-btn"aria-label="Show/hide password">\n <input class="password-toggle-check"type="checkbox"><span class="password-toggle-indicator"></span>\n </label>\n </div>\n </div>\n </div>\n <div class="d-flex flex-wrap align-items-center justify-content-between pb-4">\n <form-check class="my-1">\n <input class="form-check-input"type="checkbox"id="keep-signedin"disabled>\n <label class="form-check-label ms-1"for="keep-signedin">Keep me signed in (id)</label>\n </form-check><router-link class="fs-sm fw-semibold text-decoration-none my-1"href="/account/password-recovery">Forgot password?</a>\n </div>\n <button class="btn btn-lg btn-primary w-100 mb-4"type="button"v-on:click="submitLogin"><span v-html="buttonText"></span></button>\n \n <h2 class="h6 text-center pt-3 pt-lg-4 mb-4">Or sign in with your social account(id)</h2>\n <div class="row row-cols-1 row-cols-sm-2 gy-3">\n <div class="col"><a class="btn btn-icon btn-outline-secondary btn-google btn-lg w-100 disabled"href="#"><i class="ai-google fs-xl me-2"></i>Google</a></div>\n <div class="col"><a class="btn btn-icon btn-outline-secondary btn-facebook btn-lg w-100 disabled"href="#"><i class="ai-facebook fs-xl me-2"></i>Facebook</a></div>\n </div>\n </form>\n </div>\n \n <p class="w-100 fs-sm pt-5 mt-auto mb-5"style="max-width: 526px;"><span class="text-muted">thecoffeeroom.in</span></p>\n \n <div class="w-50 bg-size-cover bg-repeat-0 bg-position-center"style="background-image: url(/assets/images/covers/login.jpg);"></div>\n </div>\n `,data(){return{buttonText:"Log In",username:"",password:""}},async mounted(){this.$initToggle();window.scrollTo({top:0,behavior:"smooth"})},methods:{submitLogin(){this.buttonText='<span class="spinner-grow spinner-grow-sm me-2"role="status"aria-hidden="true"></span>Logging In...';const details={UserName:this.username,PassWord:this.password};const token=document.querySelector('input[name="__RequestVerificationToken"]').value;axios.defaults.headers.common["RequestVerificationToken"]=token;axios.post("/api/account/login",details).then((response=>{toaster("success","Logging in..");window.location.href=localStorage.getItem("curr_link")})).catch((error=>{toaster("error",error.response.data)})).finally((()=>{this.buttonText="Log In"}))}}};const routes=[{path:"/account/",component:BaseComponent},{path:"/account/login",component:LoginComponent},{path:"/account/signup",component:SignupComponent},{path:"/account/accountrecovery",component:PasswordReset},{path:"/account/loginviaotp",component:Loginviaotp}];const router=VueRouter.createRouter({history:VueRouter.createWebHistory(),routes:routes});const app=Vue.createApp({data(){return{isLoading:true}}});app.config.globalProperties.$initToggle=function(){var passwordVisibilityToggle=function(){var elements=document.querySelectorAll(".password-toggle");var _loop2=function _loop2(i){var passInput=elements[i].querySelector(".form-control"),passToggle=elements[i].querySelector(".password-toggle-btn");passToggle.addEventListener("click",(function(e){if(e.target.type!=="checkbox")return;if(e.target.checked){passInput.type="text"}else{passInput.type="password"}}),false)};for(var i=0;i<elements.length;i++){_loop2(i)}}()};app.use(router);app.mount("#app");