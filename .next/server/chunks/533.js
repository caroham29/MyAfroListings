exports.id = 533;
exports.ids = [533];
exports.modules = {

/***/ 9620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5117);
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7695);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6420);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _homepage_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5467);
/* harmony import */ var _homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);











const Homepage = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // var item = document.getElementById('inputItemSearch');
    // setTimeout(() => {
    // 	item.focus();
    // }, 250);
    console.log(" Hello ");
  }, []);

  const responseGoogle = response => {
    console.log(response);
  }; // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  //     useGeolocated({
  //         positionOptions: {
  //             enableHighAccuracy: true,
  //         },
  //         userDecisionTimeout: 5000,
  //     })


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().homepageContainerMain),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().homepageContainer),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().homepageOverlay),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h1", {
            children: "Afro Business, Afro Education, Afro Community"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h5", {
            className: "m-3",
            children: "Highest Rated Afro Business Services Directory Worldwide, The Best Afro Travel, Afro Education Directory"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().searchContainer)} p-3 mt-3 form-inline`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "form-group m-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
                type: "search",
                id: "inputItemSearch",
                className: "form-control",
                autoComplete: "false",
                placeholder: "Ex: business, service, food"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: "form-group m-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
                type: "search",
                className: "form-control",
                autoComplete: "false",
                placeholder: "Ex: zip code, city, state"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
              as: "a",
              className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().btn)} m-2`,
              variant: "default",
              children: "Search"
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        id: "myVideo",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("source", {
          src: "https://josephfarmsmedia.s3.us-west-1.amazonaws.com/BGMovie.mp4",
          type: "video/mp4"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: `d-inline-flex p-5 mx-3`,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().gridContainer),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().item1),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().img),
            src: "/tutor1.jpg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainContainer),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("h3", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("a", {
                href: "/hello",
                target: "_blank",
                children: "How one tutor has changed the lives of her students"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainSmText),
              children: "Teachers often go above and beyond to make their students feel comfortable. One teacher matched a student's hairstyle when she saw she was uncomfortable. Another donated a kidney to her student."
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().item2)} ${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainer)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/img2.jpg"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainerDiv),
            children: "How Gabby Goodwin's double-face double-snap barrettes shifted the culture"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().item3)} ${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainer)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/img3.jpg"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainerDiv),
            children: "Beau2Go Meal Prep \u2013 serving people throughout Philadelphia"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().item4)} ${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainer)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/img4.jpg"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainerDiv),
            children: "Everyone has potential and everyone needs a coach pushing them to achieve their greatness"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().item5)} ${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainer)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/img5.jpg"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainerDiv),
            children: "Small black businesses hit harder by inflation, here's why"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: `${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().item6)} ${(_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainer)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
            src: "/img6.jpg"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().smallContainerDiv),
            children: "The importance of advancing black home ownership"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_homepage_module_css__WEBPACK_IMPORTED_MODULE_8___default().rightSide)
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ 1533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./components/header/header.module.css
var header_module = __webpack_require__(7213);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "@react-oauth/google"
var google_ = __webpack_require__(7695);
// EXTERNAL MODULE: ./components/modals/login/login.module.css
var login_module = __webpack_require__(3314);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
// EXTERNAL MODULE: ./node_modules/react-icons/gr/index.esm.js
var index_esm = __webpack_require__(5155);
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__(6420);
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js + 4 modules
var Button = __webpack_require__(6298);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js + 49 modules
var TextField = __webpack_require__(775);
// EXTERNAL MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_ = __webpack_require__(4289);
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
;// CONCATENATED MODULE: ./services/userServices.js

const authenticate = async ({
  username = '',
  pw = ''
}) => {
  let resp = await axios.request({
    method: 'POST',
    url: '/authenticate',
    headers: {
      username,
      pw
    }
  });
  return resp.data;
};
const updateFormService = async obj => {
  return await axios.request({
    method: 'POST',
    url: '/updateForm',
    headers: obj
  });
};
const saveNewUser = async obj => {
  let resp = await axios.request({
    method: 'POST',
    url: '/saveForm',
    headers: obj
  });
  return resp.data;
};
const getFormsService = async () => {
  let resp = await axios.request({
    method: 'POST',
    url: '/forms',
    headers: {}
  });
  return resp.data;
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/modals/login/login.js

















const Login = ({
  setShowLogin
}) => {
  var _useFormikContext;

  const {
    setFieldValue,
    values,
    submitForm
  } = (_useFormikContext = (0,external_formik_.useFormikContext)()) !== null && _useFormikContext !== void 0 ? _useFormikContext : {};
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const user = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: showCapErr,
    1: setShowCapErr
  } = (0,external_react_.useState)(false);
  const captchaRef = (0,external_react_.useRef)(null);
  const {
    0: hoverItem,
    1: setHoverItem
  } = (0,external_react_.useState)(null);
  const {
    0: step,
    1: setStep
  } = (0,external_react_.useState)(1);
  (0,external_react_.useEffect)(() => {}, []);

  const inheritData = (data, updateMethod) => {
    var dataObj = external_jwt_decode_default()(data.credential);
    updateMethod('email', dataObj.email);
    updateMethod('userName', dataObj.name);
    updateMethod('picture', dataObj.picture);
    setStep(2);
  };

  const handleSubmit = () => {};

  const saveUser = async ({
    firstName,
    lastName,
    userName,
    email,
    password,
    picture
  }) => {
    dispatch({
      type: 'setUser',
      user: {
        firstName,
        lastName,
        userName,
        email,
        password,
        picture
      }
    });
    setShowLogin(false); //let user = await saveNewUser({ firstName, lastName, userName, email, password, picture });
    // if (user.id) {
    // 	// Saved successfully
    // 	dispatch({
    // 	  type: 'setUser',
    // 	  user,
    // 	})
    // } else {
    // }
    // console.log(data, " Saved ");
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_formik_.Formik, {
    initialValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      password: '',
      picture: ''
    },
    onSubmit: async values => {
      // Verify captcha value then save
      const token = captchaRef.current.getValue();

      if (!token) {
        setShowCapErr(true);
      } else {
        saveUser(values);
      }
    },
    render: ({
      setFieldValue,
      values,
      handleChange,
      touched,
      errors
    }) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(login_module_default()).loginContainer}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (login_module_default()).loginBody,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (login_module_default()).closeContainer,
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* GrFormClose */.v8y, {
            onClick: () => setShowLogin(false)
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: `mb-3`,
          children: "Sign Up"
        }), step === 1 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `my-5`,
            children: /*#__PURE__*/jsx_runtime_.jsx(google_.GoogleLogin, {
              onSuccess: resp => inheritData(resp, setFieldValue),
              width: "300",
              text: "continue_with",
              shape: "pill",
              onError: () => {
                console.log('Login Failed');
              }
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (login_module_default()).orContainer,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (login_module_default()).orContainerBorder
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (login_module_default()).orItem,
              children: "OR"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (login_module_default()).orContainerBorder
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
            as: "a",
            onClick: () => setStep(2),
            color: "primary",
            variant: "contained",
            fullWidth: true,
            children: "CONTINUE"
          })]
        }), step === 2 && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_formik_.Form, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
              fullWidth: true,
              id: "userName",
              name: "userName",
              required: true,
              label: "Display name",
              className: `my-2`,
              value: values.userName,
              onChange: handleChange,
              error: touched.userName && Boolean(errors.userName),
              helperText: touched.userName && errors.userName
            }), /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
              className: `my-2`,
              fullWidth: true,
              id: "email",
              required: true,
              name: "email",
              label: "Email",
              value: values.email,
              onChange: handleChange,
              error: touched.email && Boolean(errors.email),
              helperText: touched.email && errors.email
            }), /*#__PURE__*/jsx_runtime_.jsx(TextField/* default */.Z, {
              className: `my-2`,
              fullWidth: true,
              id: "password",
              required: true,
              name: "password",
              label: "Password",
              type: "password",
              value: values.password,
              onChange: handleChange,
              error: touched.password && Boolean(errors.password),
              helperText: touched.password && errors.password
            }), /*#__PURE__*/jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
              className: `mt-3`,
              onChange: val => setShowCapErr(!val),
              sitekey: "6Lc0rfwiAAAAABZCRu6RliDMY0PCaQW2exz1CKsq",
              ref: captchaRef
            }), showCapErr && /*#__PURE__*/jsx_runtime_.jsx("small", {
              children: "CAPTCHA response required."
            }), /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
              className: `mt-5`,
              color: "primary",
              variant: "contained",
              fullWidth: true,
              type: "submit",
              children: "Sign up"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const login = (Login);
;// CONCATENATED MODULE: ./components/header/header.js











const Header = () => {
  const router = (0,router_.useRouter)();
  const {
    0: hoverItem,
    1: setHoverItem
  } = (0,external_react_.useState)(null);
  const {
    0: showLogin,
    1: setShowLogin
  } = (0,external_react_.useState)(false);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const user = (0,external_react_redux_.useSelector)(state => state.user);
  (0,external_react_.useEffect)(() => {
    console.log(user, " User from store  from header ");
  }, [user]);

  const home = () => router.push('/');

  const viewBusiness = () => router.push('/business-listings');

  const viewEducation = () => router.push('/education-listings');

  const viewHousing = () => router.push('/housing-listings');

  const viewTravel = () => router.push('/travel-listings');

  const viewNews = () => router.push('/news');

  const signOut = () => {
    dispatch({
      type: 'setUser',
      user: null
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [showLogin && /*#__PURE__*/jsx_runtime_.jsx(login, {
      setShowLogin: setShowLogin
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `${(header_module_default()).headerContainer}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (header_module_default()).leftContainer
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).rightContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => home(),
          className: `${(header_module_default()).rightItem} ${router.pathname === '/' ? (header_module_default()).active : null}`,
          children: "Home"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => viewBusiness(),
          className: `${(header_module_default()).rightItem} ${router.pathname === '/business-listings' ? (header_module_default()).active : null}`,
          children: "Business"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => viewNews(),
          className: `${(header_module_default()).rightItem} ${router.pathname === '/news' ? (header_module_default()).active : null}`,
          children: "News"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => viewEducation(),
          className: `${(header_module_default()).rightItem} ${router.pathname === '/education-listings' ? (header_module_default()).active : null}`,
          children: "Education"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => viewHousing(),
          className: `${(header_module_default()).rightItem} ${router.pathname === '/housing-listings' ? (header_module_default()).active : null}`,
          onMouseOver: () => setHoverItem('Housing'),
          onMouseLeave: () => setHoverItem(null),
          children: ["Housing", hoverItem === "Housing" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${(header_module_default()).hoverOptionsContainer} border`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "Properties for Rent"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "Properties for Sale"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: () => viewTravel(),
          className: `${(header_module_default()).rightItem} ${router.pathname === '/travel-listings' ? (header_module_default()).active : null}`,
          children: "Travel"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (header_module_default()).rightItemAlt,
          onMouseOver: () => setHoverItem('Profile'),
          onMouseLeave: () => setHoverItem(null),
          children: user && user.picture ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: (header_module_default()).profilePic,
              src: "https://lh3.googleusercontent.com/a/ALm5wu3Kd-5Oiw5QLzwcAI8mQMrv2wf94TPw8qRjVwdjeA=s96-c"
            }), hoverItem === "Profile" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: `${(header_module_default()).hoverOptionsContainer} border`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "Profile"
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                onClick: signOut,
                children: "Sign Out"
              })]
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => setShowLogin(true),
            children: "Join Now"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./components/homepage/homepage.js
var homepage = __webpack_require__(9620);
;// CONCATENATED MODULE: ./components/layout/layout.js







const Layout = () => {
  (0,external_react_.useEffect)(() => {}, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(header, {})
  });
};

/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 7213:
/***/ ((module) => {

// Exports
module.exports = {
	"profilePic": "header_profilePic__1EJxO",
	"headerContainer": "header_headerContainer__1BLau",
	"leftContainer": "header_leftContainer__2vxEf",
	"rightContainer": "header_rightContainer__1KOTR",
	"rightItem": "header_rightItem__3izbc",
	"rightItemAlt": "header_rightItemAlt__1bhqf",
	"active": "header_active__2KEz7",
	"toggle": "header_toggle__1oF2b",
	"hoverOptionsContainer": "header_hoverOptionsContainer__1XpnU"
};


/***/ }),

/***/ 5467:
/***/ ((module) => {

// Exports
module.exports = {
	"homepageContainerMain": "homepage_homepageContainerMain__3WK1B",
	"mainSmText": "homepage_mainSmText__2_kUM",
	"homepageContainer": "homepage_homepageContainer__4fQFB",
	"img": "homepage_img__2juFp",
	"mainContainer": "homepage_mainContainer__u8tI2",
	"homepageOverlay": "homepage_homepageOverlay__2clL6",
	"searchContainer": "homepage_searchContainer__2eL3K",
	"btn": "homepage_btn__1cOW_",
	"rightSide": "homepage_rightSide__2vRtd",
	"gridContainer": "homepage_gridContainer__39-DV",
	"item1": "homepage_item1__UkvyH",
	"item2": "homepage_item2__2QS-Q",
	"item3": "homepage_item3__2aRbR",
	"item4": "homepage_item4__p7oV1",
	"item5": "homepage_item5__BozBo",
	"item6": "homepage_item6__HM5D3",
	"smallContainer": "homepage_smallContainer__uw3gO",
	"smallContainerDiv": "homepage_smallContainerDiv__159BJ"
};


/***/ }),

/***/ 3314:
/***/ ((module) => {

// Exports
module.exports = {
	"loginContainer": "login_loginContainer__33ga6",
	"loginBody": "login_loginBody__QWuoV",
	"closeContainer": "login_closeContainer__3-WR5",
	"fullWidth": "login_fullWidth__NbVxq",
	"orContainer": "login_orContainer__1sRrb",
	"orContainerBorder": "login_orContainerBorder__1G2bq",
	"orItem": "login_orItem__3k97a"
};


/***/ })

};
;