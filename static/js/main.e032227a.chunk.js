(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a(179)},160:function(e,t,a){e.exports=a(366)},179:function(e,t,a){"use strict";a.r(t),a.d(t,"FirebaseConfig",function(){return n});var n={apiKey:"AIzaSyBJBco_oXlcJrfDRMRT-6yxTCja6OSZ5R8",authDomain:"if-website-9d3a1.firebaseapp.com",databaseURL:"https://if-website-9d3a1.firebaseio.com",projectId:"if-website-9d3a1",storageBucket:"if-website-9d3a1.appspot.com",messagingSenderId:"768679008713"}},314:function(e,t,a){var n={"./IF-Banner.png":315,"./buildings-image.jpg":316,"./business-man-image.jpg":317,"./city-image-1-min.jpg":318,"./city-image-1.jpg":319,"./city-image-1.png":320,"./city-image.jpeg":321,"./code-image.jpg":322,"./developers-image.jpg":323,"./new-google-favicon-512.png":324,"./vr-image.jpg":325};function o(e){var t=i(e);return a(t)}function i(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=314},315:function(e,t,a){e.exports=a.p+"static/media/IF-Banner.b83a24c2.png"},316:function(e,t,a){e.exports=a.p+"static/media/buildings-image.60cf7a50.jpg"},317:function(e,t,a){e.exports=a.p+"static/media/business-man-image.e7f4b02f.jpg"},318:function(e,t,a){e.exports=a.p+"static/media/city-image-1-min.5449d7fb.jpg"},319:function(e,t,a){e.exports=a.p+"static/media/city-image-1.8039a81a.jpg"},320:function(e,t,a){e.exports=a.p+"static/media/city-image-1.25a96dcd.png"},321:function(e,t,a){e.exports=a.p+"static/media/city-image.121dc0a9.jpeg"},322:function(e,t,a){e.exports=a.p+"static/media/code-image.a1f31fae.jpg"},323:function(e,t,a){e.exports=a.p+"static/media/developers-image.786d8c16.jpg"},324:function(e,t,a){e.exports=a.p+"static/media/new-google-favicon-512.9b224c98.png"},325:function(e,t,a){e.exports=a.p+"static/media/vr-image.3bf42dfe.jpg"},362:function(e,t,a){},366:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(24),r=a.n(i),c=a(17),l=a(18),s=a(20),u=a(19),p=a(21),m=a(28),d=a(144),h=a.n(d),g=a(145),f=a.n(g),b=a(13),E=a.n(b),v=a(99),y=a.n(v),w=a(134),O=a(135),C=a(367);function j(){var e=Object(w.a)(["\n  text-decoration: none;\n  color: inherit;\n  border: none;\n\n  &:focus,\n  &:hover,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]);return j=function(){return e},e}var k=Object(O.a)(C.a)(j()),x=function(e){return o.a.createElement(k,e)},A=a(141),S=a.n(A),I=a(36),N=a.n(I),P=a(25),W=a.n(P),F=a(93),L=a.n(F),T=a(26),U=a(43),R=function(e,t,a,n){return{id:e,name:t,questions:a,submitted:n}},q=a(139);U.initializeApp(q.FirebaseConfig);var D=U.database(),B=U.auth(),M={google:new U.auth.GoogleAuthProvider,github:new U.auth.GithubAuthProvider,facebook:new U.auth.FacebookAuthProvider,twitter:new U.auth.TwitterAuthProvider},_="FETCH_USER",G=" LOAD_APPLICATIONS_REQUEST",z=" LOAD_APPLICATIONS_SUCCESS",V=" LOAD_APPLICATIONS_FAILED",$=" UPDATE_APPLICATIONS_REQUEST",H=" UPDATE_APPLICATIONS_SUCCESS",J=" UPDATE_APPLICATIONS_FAILED",Y=function(e){return function(t){t({type:G}),function(e){return D.ref("/".concat(e.uid)).once("value")}(e).then(function(e){t({type:z,payload:e.val()})}).catch(function(e){t({type:V,payload:e})})}},Q=a(143),K=a.n(Q),X=a(142),Z=a.n(X),ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={anchorEl:null,hasSignedOut:!1},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleSnackbarClose=function(){a.setState({hasSignedOut:!1})},a.signOut=function(){a.handleClose(),a.props.signOut(),a.setState({hasSignedOut:!0})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a,n=this.state,i=n.anchorEl,r=n.hasSignedOut;return this.props.authenticated?(a=o.a.createElement(x,{to:"/Apply"},o.a.createElement(N.a,{onClick:this.handleClose},"Your Application")),e=o.a.createElement(N.a,{onClick:this.signOut},"Sign Out")):t=o.a.createElement(x,{to:"/Log-In"},o.a.createElement(N.a,{onClick:this.handleClose},"Log In")),o.a.createElement("div",null,o.a.createElement(W.a,{"aria-owns":i?"nav-menu":null,"aria-haspopup":"true",color:"secondary",onClick:this.handleClick},o.a.createElement(L.a,null)),o.a.createElement(S.a,{id:"nav-menu",color:"inherit",anchorEl:i,open:Boolean(i),onClose:this.handleClose},t,a,e,o.a.createElement(x,{to:"/About-Us"},o.a.createElement(N.a,{onClick:this.handleClose},"About Us")),o.a.createElement(x,{to:"/Event-Scope"},o.a.createElement(N.a,{onClick:this.handleClose},"Event Scope")),o.a.createElement(x,{to:"/Example-Projects"},o.a.createElement(N.a,{onClick:this.handleClose},"Example Projects")),o.a.createElement(x,{to:"/Contact-Us"},o.a.createElement(N.a,{onClick:this.handleClose},"Contact Us"))),o.a.createElement(Z.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:this.handleSnackbarClose,ContentProps:{"aria-describedby":"message-id"},message:o.a.createElement("span",{id:"message-id"},"You have been successfully signed out"),action:[o.a.createElement(W.a,{key:"close","aria-label":"Close",color:"secondary",onClick:this.handleSnackbarClose},o.a.createElement(K.a,null))]}))}}]),t}(o.a.Component);var te=Object(T.b)(function(e){return{authenticated:Boolean(e.auth)}},{signOut:function(){return function(e){B.signOut().then(function(){console.log("Sign Out Sucessful!")}).catch(function(e){console.log(e)})}}})(ee);var ae=Object(m.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},appBar:{color:e.palette.primary.dark}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(h.a,{position:"static",color:"paper"},o.a.createElement(f.a,null,o.a.createElement(y.a,{smDown:!0},o.a.createElement(E.a,{variant:"h5",color:"secondary",className:t.grow},o.a.createElement(x,{to:"/"},"Innovate The Future"))),o.a.createElement(y.a,{mdUp:!0},o.a.createElement(E.a,{variant:"h5",color:"secondary",className:t.grow},o.a.createElement(x,{to:"/"},"IF"))),o.a.createElement(te,null))))}),ne=a(370),oe=a(368),ie=a(371),re=a(146),ce=a(29),le=a.n(ce),se=a(55),ue=a.n(se),pe=a(94),me=a.n(pe),de=a(73),he=a.n(de),ge=a(35),fe=a.n(ge),be=a(79),Ee=a.n(be),ve=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){Ee()({targets:"#logo .lines path",strokeDashoffset:[Ee.a.setDashoffset,0],easing:"easeInOutSine",delay:function(e,t){return 100*t},duration:3e3}),Ee()({targets:"#logo .shapes path",fill:["rgba(0,0,0,0)","#26dbff"],easing:"easeInSine",delay:function(e,t){return 100*t},duration:3e3})}},{key:"render",value:function(){return o.a.createElement("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1333 1333",width:this.props.width,height:this.props.height},o.a.createElement("g",{transform:"matrix(1.33333 0 0 -1.33333 0 1333)",className:"lines shapes"},o.a.createElement("path",{stroke:"#26dbff",strokeLinecap:"round",strokeWidth:"4",d:"M714 415v146H602c-19 0-35-15-35-34V415zM180 197h58v586h-58zM268 197h58v586h-58z"}),o.a.createElement("path",{stroke:"#26dbff",strokeLinecap:"round",strokeWidth:"4",d:"M536 727h298v56H541c-81 0-146-66-146-147V197h59v448c0 45 37 82 82 82"}),o.a.createElement("path",{stroke:"#26dbff",strokeLinecap:"round",strokeWidth:"4",d:"M484 648V197h57v439h293v61H533c-27 0-49-22-49-49"})))}}]),t}(n.Component);var ye=Object(m.withStyles)(function(e){return{layout:{width:"auto",display:"block"},buttons:{margin:"auto"},button:{fontSize:"20px",margin:"auto"},input:{display:"none"},root:{width:"100%"},title:{margin:"auto",marginTop:"20px",marginBottom:"20px",textAlign:"center"},text:{width:"90%",margin:"auto",textAlign:"center"},card:{minWidth:"70%",maxWidth:"90%",width:"600px",margin:"auto",marginTop:"20px"}}})(function(e){var t=e.classes;return o.a.createElement("main",{className:t.layout},o.a.createElement(fe.a,null),o.a.createElement(ue.a,{className:t.card,elevation:1},o.a.createElement(re.Parallax,{bgImage:a(314)("./".concat(Math.random()<.5?"city-image-1.png":"city-image.jpeg")),strength:500,blur:3},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(ve,{width:"60%"}))),o.a.createElement(he.a,null,o.a.createElement(E.a,{variant:"h4",className:t.title},"Welcome to Innovate The Future"),o.a.createElement(E.a,{variant:"h5",className:t.text,paragraph:!0},"Incididunt et exercitation esse labore cupidatat nulla. Amet commodo amet anim dolore elit ea Lorem adipisicing in. Cupidatat aliquip occaecat do consectetur fugiat ad mollit aliqua eu fugiat tempor amet esse ipsum. Pariatur officia mollit eu commodo tempor voluptate. Do sint cillum quis aute sit consequat incididunt.")),o.a.createElement(me.a,null,o.a.createElement("div",{className:t.buttons},o.a.createElement(le.a,{className:t.button,color:"secondary"},o.a.createElement(x,{to:"/Apply"},"Apply Now")),o.a.createElement(le.a,{className:t.button,color:"secondary"},o.a.createElement(x,{to:"/Event-Scope"},"See The Scope"))))))}),we=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,"Consectetur ex commodo ea eiusmod duis veniam. In dolore sunt eu duis sit. Ea velit dolor cillum eu. Ut ipsum ad in anim Lorem irure culpa non eiusmod. Nostrud consequat tempor voluptate adipisicing duis ex eu aliqua. Magna elit labore mollit culpa amet elit sint do ipsum incididunt ut eu duis aliqua.Nisi fugiat voluptate sunt enim nulla officia aute laboris mollit aliquip deserunt voluptate laboris. Non sunt ut id dolore amet voluptate cillum eiusmod officia. Culpa Lorem amet labore ullamco reprehenderit incididunt dolor exercitation in ipsum. Esse mollit reprehenderit irure cupidatat nostrud labore deserunt occaecat sit in ex consequat eiusmod est. Eiusmod nisi est nisi reprehenderit id velit aute est duis esse reprehenderit dolor. Velit nisi ea ex id tempor ad. Ut est excepteur do esse consectetur nulla amet occaecat duis ut. Lorem mollit voluptate proident occaecat velit do cupidatat reprehenderit. Veniam ut aute cupidatat sit labore. Tempor amet consequat nostrud pariatur. Eiusmod deserunt aute excepteur voluptate et proident excepteur duis ex. Irure in voluptate sit duis eiusmod anim velit laboris aliqua laborum veniam occaecat consectetur duis. Pariatur eiusmod quis laborum nulla amet sint consectetur ullamco nulla aute nulla non. Excepteur cillum commodo sunt culpa est ex sunt ut nostrud dolor proident dolore proident occaecat. Dolore ut sunt commodo aliqua sunt minim. Voluptate do ea anim quis laboris. Et deserunt aute veniam ut sint quis aute consequat aliquip consequat Lorem.")}}]),t}(n.Component),Oe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null)}}]),t}(n.Component);var Ce=function(){return o.a.createElement("div",null,o.a.createElement(E.a,{variant:"h1"},"Coming Soon!"))},je=a(147),ke=a.n(je),xe=a(74),Ae=a.n(xe),Se=a(75),Ie=a.n(Se),Ne=a(148),Pe=a.n(Ne);var We=Object(m.withStyles)({card:{maxWidth:500,width:"90%",margin:"auto",marginTop:"20px"},title:{fontSize:60},pos:{marginBottom:12},pos1:{marginBottom:25}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root,align:"center"},o.a.createElement(fe.a,null),o.a.createElement(ue.a,{className:t.card},o.a.createElement(he.a,null,o.a.createElement(E.a,{className:t.title,color:"textPrimary",gutterBottom:!0},"Contact Information"),o.a.createElement(E.a,{className:t.pos,color:"textPrimary"},"Phone Number"),o.a.createElement(E.a,{className:t.pos1,variant:"h5",component:"h2"},"123-456-7890"),o.a.createElement(E.a,{className:t.pos,color:"textPrimary"},"Email"),o.a.createElement(E.a,{className:t.pos1,variant:"h5",component:"h2"},"if@if.com"),o.a.createElement(E.a,{className:t.pos,color:"textPrimary"},"Address"),o.a.createElement(E.a,{className:t.pos1,variant:"h5",component:"h2"},"Turner Fenton Secondary School"),o.a.createElement(E.a,{className:t.pos,color:"textPrimary"},"Social Media"),o.a.createElement("div",null,o.a.createElement(W.a,{title:"Visit our Facebook Page",color:"white",href:"http://www.facebook.com"},o.a.createElement(Ae.a,null)),o.a.createElement(W.a,{title:"See our Instagram",color:"white",href:"https://www.instagram.com/innovatethefuture/"},o.a.createElement(ke.a,null)),o.a.createElement(W.a,{title:"See our Twitter",color:"white",href:"http://www.twitter.com"},o.a.createElement(Ie.a,null)),o.a.createElement(W.a,{title:"See our Snapchat",color:"white",href:"http://www.snapchat.com"},o.a.createElement(Pe.a,null))))))}),Fe=a(38),Le=a(150),Te=a.n(Le),Ue=a(27),Re=a.n(Ue),qe=a(149),De=a.n(qe),Be=a(32),Me=a.n(Be),_e=a(33),Ge=a.n(_e),ze=a(41),Ve=a.n(ze),$e=a(7),He=a.n($e),Je=a(2),Ye=a.n(Je),Qe=a(151),Ke=a.n(Qe),Xe=a(152),Ze=a.n(Xe),et=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){t.persist(),a.setState(Object(Fe.a)({},e,t.target.value))}},a.signInWithEmailAndPassword=function(){a.props.signInWithEmailAndPassword(a.state.email,a.state.password)},a.state={email:"",password:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillUpdate",value:function(e){e.auth&&this.context.router.history.push("/Apply")}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(fe.a,null),o.a.createElement("main",{className:e.layout},o.a.createElement(Ve.a,{className:e.paper},o.a.createElement(E.a,{component:"h1",variant:"h5"},"Log In"),o.a.createElement("form",{className:e.form},o.a.createElement(Re.a,{margin:"normal",fullWidth:!0},o.a.createElement(Ge.a,{htmlFor:"email",FormLabelClasses:{root:e.inputRoot,focused:e.inputFocused}},"Email Address"),o.a.createElement(Me.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleChange("email"),classes:{root:e.inputRoot}})),o.a.createElement(Re.a,{margin:"normal",fullWidth:!0},o.a.createElement(Ge.a,{htmlFor:"password",FormLabelClasses:{root:e.inputRoot,focused:e.inputFocused}},"Password"),o.a.createElement(Me.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleChange("password"),classes:{root:e.inputRoot}})),o.a.createElement(De.a,{classes:{root:e.inputRoot},control:o.a.createElement(Te.a,{value:"remember",classes:{root:e.checkRoot,checked:e.checked}}),label:"Remember me"}),o.a.createElement(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:this.signInWithEmailAndPassword},o.a.createElement(x,{to:"/Apply"},"Log In"))),o.a.createElement(E.a,{className:e.signUp},"Don't have an account?"," ",o.a.createElement(x,{to:"/Sign-Up",className:e.link},"Click here to sign up!")," ","Or sign up with the methods below."),o.a.createElement("div",null,o.a.createElement(W.a,{color:"secondary",onClick:this.props.signInWithGoogle,"aria-label":"GoogleOAuth"},o.a.createElement(Ke.a,null)),o.a.createElement(W.a,{color:"secondary",onClick:this.props.signInWithGithub},o.a.createElement(Ze.a,null)),o.a.createElement(W.a,{color:"secondary",onClick:this.props.signInWithFacebook},o.a.createElement(Ae.a,null)),o.a.createElement(W.a,{color:"secondary",onClick:this.props.signInWithTwitter},o.a.createElement(Ie.a,null))))))}}]),t}(n.Component);et.contextTypes={router:Ye.a.object};var tt=Object(ie.a)(Object(T.b)(function(e){return{auth:e.auth}},{signInWithEmailAndPassword:function(e,t){return function(a){B.signInWithEmailAndPassword(e,t).then(function(e){}).catch(function(e){console.log(e)})}},signInWithGoogle:function(){return function(e){B.signInWithPopup(M.google).then(function(e){}).catch(function(e){console.log(e)})}},signInWithGithub:function(){return function(e){B.signInWithPopup(M.github).then(function(e){}).catch(function(e){console.log(e)})}},signInWithFacebook:function(){return function(e){B.signInWithPopup(M.facebook).then(function(e){}).catch(function(e){console.log(e)})}},signInWithTwitter:function(){return function(e){B.signInWithPopup(M.twitter).then(function(e){}).catch(function(e){console.log(e)})}}})(He()(function(e){return{layout:Object(Fe.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},formControl:{color:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit},signUp:{marginTop:2*e.spacing.unit},link:{color:e.palette.secondary.main},checkRoot:{color:e.palette.secondary.main,"&$checked":{color:e.palette.secondary.light}},checked:{},inputRoot:{color:e.palette.secondary.main,"&$inputFocused":{color:e.palette.secondary.main}},inputFocused:{}}})(et))),at=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){t.persist(),a.setState(Object(Fe.a)({},e,t.target.value))}},a.state={email:"",password:"",confirmation:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"signUpWithEmailAndPassword",value:function(){console.log(this.state);var e=this.state,t=e.email,a=e.password;a===e.confirmation&&this.signUpWithEmailAndPassword(t,a)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(o.a.Fragment,null,o.a.createElement(fe.a,null),o.a.createElement("main",{className:e.layout},o.a.createElement(Ve.a,{className:e.paper},o.a.createElement(E.a,{component:"h1",variant:"h5"},"Sign Up"),o.a.createElement("form",{className:e.form},o.a.createElement(Re.a,{margin:"normal",fullWidth:!0},o.a.createElement(Ge.a,{htmlFor:"email",FormLabelClasses:{root:e.inputRoot,focused:e.inputFocused}},"Email Address"),o.a.createElement(Me.a,{id:"email",name:"email",autoComplete:"email",autoFocus:!0,onChange:this.handleChange("email"),classes:{root:e.inputRoot}})),o.a.createElement(Re.a,{margin:"normal",fullWidth:!0},o.a.createElement(Ge.a,{htmlFor:"password",FormLabelClasses:{root:e.inputRoot,focused:e.inputFocused}},"Password"),o.a.createElement(Me.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",onChange:this.handleChange("password"),classes:{root:e.inputRoot}})),o.a.createElement(Re.a,{margin:"normal",fullWidth:!0},o.a.createElement(Ge.a,{htmlFor:"password-confirm",FormLabelClasses:{root:e.inputRoot}},"Confirm Password"),o.a.createElement(Me.a,{name:"password",type:"password",id:"password-confirm",autoComplete:"current-password",onChange:this.handleChange("confirmation"),classes:{root:e.inputRoot}})),o.a.createElement(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.signUp,onClick:this.signUpWithEmailAndPassword},o.a.createElement(x,{to:"/Log-In"},"Sign Up"))))))}}]),t}(n.Component),nt=Object(ie.a)(Object(T.b)(null,{signUpWithEmailAndPassword:function(e,t){return function(a){B.signUpWithEmailAndPassword(e,t).then(function(e){}).catch(function(e){console.log(e)})}}})(He()(function(e){return{layout:Object(Fe.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},signUp:{marginTop:2*e.spacing.unit},inputRoot:{color:e.palette.secondary.main,"&$inputFocused":{color:e.palette.secondary.main}},inputFocused:{}}})(at))),ot=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(Re.a,{margin:"normal",required:this.props.required,fullWidth:!0},o.a.createElement(Ge.a,{htmlFor:this.props.label,FormLabelClasses:{root:e.cssLabel,focused:e.cssFocused}},this.props.label),o.a.createElement(Me.a,{id:this.props.id,name:this.props.label,autoComplete:this.props.label,classes:{root:e.inputRoot},onChange:this.props.onChange,value:this.props.value,readOnly:this.props.readOnly})))}}]),t}(n.Component),it=He()(function(e){return{cssLabel:{color:e.palette.secondary.main,"&$cssFocused":{color:e.palette.secondary.main}},cssFocused:{}}})(ot),rt=(a(8),a(155)),ct=a.n(rt),lt=a(156),st=a.n(lt),ut=(n.Component,a(95)),pt=a.n(ut),mt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",null,o.a.createElement(Re.a,{margin:"normal",required:this.props.required,fullWidth:!0,variant:"filled"},o.a.createElement(Ge.a,{htmlFor:this.props.label,FormLabelClasses:{root:e.cssLabel,focused:e.cssFocused}},this.props.label),o.a.createElement(pt.a,{id:this.props.id,name:this.props.label,autoComplete:"null",multiline:!0,rows:this.props.rows,classes:{root:e.inputRoot},onChange:this.props.onChange,value:this.props.value,readOnly:this.props.readOnly})))}}]),t}(n.Component),dt=He()(function(e){return{cssLabel:{color:e.palette.secondary.main,"&$cssFocused":{color:e.palette.secondary.main}},cssFocused:{}}})(mt),ht=a(44),gt=a.n(ht),ft=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).replaceInput=function(){if(void 0!==a.props.application.questions){for(var e=Object.keys(a.state),t=a.props.application.questions,n=0;n<e.length;n++)for(var o=e[n],i=a.state[o].label,r=0;r<t.length;r++)if(i===t[r].label){a.setState(Object(Fe.a)({},o,{label:a.state[o].label,value:t[r].value}));break}console.log(t),console.log(a.state)}},a.submitApplication=function(){var e=[];for(var t in a.state){var n=a.state[t];e.push(n)}console.log(a.props.application.submitted),a.props.updateUserApplication(a.props.user,e,!0)},a.saveApplication=function(){var e=[];for(var t in a.state){var n=a.state[t];e.push(n)}a.props.updateUserApplication(a.props.user,e)},a.handleChange=function(e){return function(t){t.persist(),a.setState(Object(Fe.a)({},e,{label:a.state[e].label,value:t.target.value}))}},a.state={firstName:{label:"First Name",value:""},lastName:{label:"Last Name",value:""},email:{label:"Email",value:""},question1:{label:"[question 1 will be here]?",value:""}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.props.user.uid!==e.user.uid&&this.props.loadUserApplication(e.user)}},{key:"componentDidUpdate",value:function(e){e.application!==this.props.application&&this.replaceInput()}},{key:"render",value:function(){var e=this.props.classes,t=this.props.application.submitted;return o.a.createElement("div",{className:e.layout,align:"center"},o.a.createElement(fe.a,null),o.a.createElement(ue.a,{className:e.card,align:"center"},o.a.createElement(E.a,{variant:"h2",className:e.title},"Your Application"),o.a.createElement(gt.a,{container:!0,spacing:24,justify:"center"},o.a.createElement(gt.a,{item:!0,xs:12,sm:6,md:4,lg:3},o.a.createElement(it,{label:this.state.firstName.label,required:!0,id:"first-name",onChange:this.handleChange("firstName"),value:this.state.firstName.value,readOnly:t})),o.a.createElement(gt.a,{item:!0,xs:12,sm:6,md:4,lg:3},o.a.createElement(it,{label:this.state.lastName.label,required:!0,id:"last-name",onChange:this.handleChange("lastName"),value:this.state.lastName.value,readOnly:t})),o.a.createElement(gt.a,{item:!0,xs:12,sm:12,md:6},o.a.createElement(it,{label:this.state.email.label,required:!0,id:"email",onChange:this.handleChange("email"),value:this.state.email.value,readOnly:t})),o.a.createElement(gt.a,{item:!0,xs:12},o.a.createElement(dt,{label:this.state.question1.label,required:!0,rows:4,id:"question1",onChange:this.handleChange("question1"),value:this.state.question1.value,readOnly:t})),o.a.createElement(gt.a,{item:!0,xs:12,sm:6,md:4,lg:3},o.a.createElement(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.button,onClick:this.saveApplication,disabled:t},"Save Application")),o.a.createElement(gt.a,{item:!0,xs:12,sm:6,md:4,lg:3},o.a.createElement(le.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.button,onClick:this.submitApplication,disabled:t},"Submit Application")))))}}]),t}(n.Component),bt=Object(T.b)(function(e){return{user:e.auth,application:e.application}},{loadUserApplication:Y,updateUserApplication:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(n){n({type:$}),function(e,t,a){var n=R(e.uid,e.email,t,a);return D.ref("/"+e.uid).set(n)}(e,t,a).then(function(t){Y(e)(n),n({type:H})}).catch(function(e){console.log(e),n({type:J,payload:e})})}}})(Object(m.withStyles)(function(e){return{layout:{width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,alignItems:"center"},card:{width:"90%",maxWidth:1e3,margin:"auto",marginTop:"20px",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},title:{color:e.palette.text.primary},button:{margin:"10px"}}})(ft)),Et=Object(m.createMuiTheme)({palette:{type:"dark",primary:{light:"#030514",main:"#2d2f3a",dark:"#ffffff",contrastText:"#000"},secondary:{main:"#00e5ff",constrastText:"#000"},text:{primary:"#fff",secondary:"#000",disabled:"#fefefe",hint:"#fefefe"},background:{default:"#ddeeff",paper:"#000000"},action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.14)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)"}}}),vt=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return o.a.createElement(m.MuiThemeProvider,{theme:Et},o.a.createElement(ae,null),o.a.createElement(ne.a,null,o.a.createElement(oe.a,{exact:!0,path:"/",component:ye}),o.a.createElement(oe.a,{path:"/About-Us",component:we}),o.a.createElement(oe.a,{path:"/Event-Scope",component:Oe}),o.a.createElement(oe.a,{path:"/Example-Projects",component:Ce}),o.a.createElement(oe.a,{path:"/Contact-Us",component:We}),o.a.createElement(oe.a,{path:"/Log-In",component:tt}),o.a.createElement(oe.a,{path:"/Sign-Up",component:nt}),o.a.createElement(oe.a,{path:"/Apply",component:function(e){var t=function(t){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(l.a)(a,[{key:"componentWillMount",value:function(){null===this.props.authenticated&&this.context.router.history.push("/Log-In")}},{key:"componentWillUpdate",value:function(e){e.authenticated||this.context.router.history.push("/Log-In")}},{key:"render",value:function(){return!0===this.props.authenticated?o.a.createElement(e,this.props):null}}]),a}(n.Component);return t.contextTypes={router:Ye.a.object},Object(ie.a)(Object(T.b)(function(e){return{authenticated:Boolean(e.auth)}})(t))}(bt)})))}}]),t}(n.Component),yt=Object(ie.a)(Object(T.b)(null,{fetchUser:function(){return function(e){B.onAuthStateChanged(function(t){e(t?{type:_,payload:t}:{type:_,payload:null})})}}})(vt)),wt=a(42),Ot=a(157),Ct=a(158),jt={},kt=Object(wt.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload||null;default:return e}},application:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return t.payload;default:return e}}}),xt=a(369),At=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function St(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(362),a(364);var It=Object(wt.createStore)(kt,{},Object(Ot.composeWithDevTools)(Object(wt.applyMiddleware)(Ct.a)));r.a.render(o.a.createElement(T.a,{store:It},o.a.createElement(xt.a,{basename:"/Innovate-The-Future"},o.a.createElement(yt,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Innovate-The-Future",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Innovate-The-Future","/service-worker.js");At?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):St(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):St(t,e)})}}()}},[[160,2,1]]]);
//# sourceMappingURL=main.e032227a.chunk.js.map