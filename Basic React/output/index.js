// const h1 = React.createElement('h1',{className:'heading'},'Hello World')

// const h1 = {
//   $$typeof: Symbol.for('react.element'),
//   type: "h1",
//   ref: null,
//   props: {
//     className: "heading",
//     children: "Hello World",
//   },
// };

// const h2 = {
//   $$typeof: Symbol.for('react.element'),
//   type: "h2",
//   ref: null,
//   props: {
//     className: "heading2",
//     children: [
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: "b",
//         ref: null,
//         props: {
//           className: "boldText",
//           children: "Hello bold tag",
//         },
//       },
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: "i",
//         ref: null,
//         props: {
//           className: "iTag",
//           children: [
//             {
//               $$typeof: Symbol.for('react.element'),
//               type: "span",
//               ref: null,
//               props: {
//                 className: "spanText",
//                 children: "Hello World",
//               },
//             }
//           ],
//         },
//       }
//     ],
//   },
// }

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render({
//   $$typeof: Symbol.for('react.element'),
//   type: "h2",
//   ref: null,
//   props: {
//     className: "heading2",
//     children: [
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: "b",
//         ref: null,
//         props: {
//           className: "boldText",
//           children: "Hello bold tag",
//         },
//       },
//       {
//         $$typeof: Symbol.for('react.element'),
//         type: "i",
//         ref: null,
//         props: {
//           className: "iTag",
//           children: [
//             {
//               $$typeof: Symbol.for('react.element'),
//               type: "span",
//               ref: null,
//               props: {
//                 className: "spanText",
//                 children: "Hello World",
//               },
//             }
//           ],
//         },
//       }
//     ],
//   },
// });

// let totalNumber = 10;
// let rightNum = 0
// let leftNum = totalNumber - rightNum
// function leftButtonClick(){
//   leftNum = 0
//   rightNum = 10
//   console.log(leftNum, rightNum)
// }
// function rightButtonClick(){
//   leftNum = 10
//   rightNum = 0
//   console.log(leftNum, rightNum)
// }
// const leftArrow = React.createElement('img',{className: 'left-arrow', src:'./images/left-arrow.png'})
// const rightArrow = React.createElement('img',{className: 'right-arrow', src:'./images/right-arrow.png'})

// const btn1 = React.createElement('button',{className: 'leftBtn',onClick: leftButtonClick},leftArrow)
// const btn2 = React.createElement('button',{className: 'rightBtn',onClick: rightButtonClick},rightArrow)

// const heading1 = React.createElement('h1',{className:'busket1'},leftNum)
// const heading2 = React.createElement('h1',{className:'busket2'},rightNum)

// const div1 = React.createElement('div',{className:'div1',id:'div1'},heading1)
// const div2 = React.createElement('div',{className:'div2',id:'div2'},heading2)

// const section = React.createElement('section',{className:'section'},div1,btn1,btn2,div2)

// const root = ReactDOM.createRoot(document.querySelector('#root'))

// root.render(section)

// const container = React.createElement('div',{className:'container', id:'container'}, 
//   [
//     React.createElement('section', {key:1} , [
//       React.createElement('p',{key: 2}, 'The Library for using React')
//     ])
//   ]
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(container)

// Project : 
// pass a image in img tag 

// const container = React.createElement('div', {className:'container'},
//   [
//     React.createElement('section',{key: 1, className: 'section1'},
//     [
//       React.createElement('h2',{key:1, className:'imageText'},'Image'),
//       React.createElement('img',{key:2, className: 'image', src:'./images/DSC_0061.JPG', alt:'images'}),
//       React.createElement('p',{key:3, className:'para',style:{fontSize:'20px'}},'This is Me')
//     ]),
//     React.createElement('section',{key:2, className: 'section2'},
//     [
//       React.createElement('h2',{key:1, className:'imageText'},'Image'),
//       React.createElement('img',{key:2, className: 'image', src:'./images/DSC_0061.JPG', alt:'images', style: {width: '100px'}}),
//       React.createElement('p',{key:3, className:'para',style:{fontSize:'25px'}},'This is Me')
//     ])
//   ]
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(container)

// project : 
// create a form without Babel

// const container = React.createElement('div',{className:'container',id:'container'},
//   [
//     React.createElement('form',{key:1, className:'form'},
//       [
//         React.createElement('div',{key: 1, className:'userName'},
//           [
//             React.createElement('label',{key: 1, className:'userNameLabel', htmlFor:'username'}, 'userName'),
//             React.createElement('input',{key:2, className:'input1', id:'username', placeholder:'Enter Your Name'})
//           ]
//         ),
//         React.createElement('div',{key: 2, className:'password'},
//           [
//             React.createElement('label',{key: 1, className:'passwordLabel', htmlFor:'password'},'password'),
//             React.createElement('input',{key:2, className:'input2',id:'password', placeholder:'Enter your Password'})
//           ]
//         ),
//         React.createElement('button',{key:3, className:'button'},'Submit')
//       ]
//     )
//   ]
// )

// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(container)

// Babel start 
// html er moto dekhte jei code gula react component e use hoy egula ke React element e convert korar jonno use hoy Babel . 
// tar mane jsx code ke react element e convert kore babel 
// new javascript ke old javascript e convert korte pare 

// *************Important Notes**************
// prothomoto amra react e jei element gula create kori seta React element hishebe create hoy , then oita ReactDOM er maddhome browser dom hishebe convert hoye webpage e show hoy . karon webpage react element bujhe na , webpage only dom element bujhe . ai kaj ta korar jonno ReactDOM age ekta container create kore jar name usually root deya hoy . container bolte kothay render korbe seta . then sei container er moddhe react element gula render kore root.render function er maddhome . ai function react element ke dom element e convert kore automatically dom e update kore dey jate webpage e show hoy . 
// akhn React element create kora onk kothin . eta muloto object . tai kaj ta easy korar jonno ashe jsx . jsx holo html er motoii, javascript file e use hoy . amra jevabe html file e html likhi sevabeii html likhbo react file or javascript file e . oi html ke babel convert kore react element object e . and sei react element object ke render kore dom element banay holo ReactDOM . 

// babel start

// type...
// babel niye kaj korte holo prothome html er vitor ai index.js file ta jei script tag diye connect kora hoise sei script tag er moddhe type attribute set korte hobe type = "text/babel" . karon by default thake type="text/javascript" . jar karone index.js file jeta index.html er sathe connect hoise seta bujhe je eta ekta javascript file and tar jonno sei script tag seivabeii behave koreche. kintu type="text/babel" dile script tag tokhon index.js ke babel file hishebe dhore babel code gula ke sevabeii manage korbe...

// const h2 = <h2>Hello World</h2>

// ReactDOM.createRoot(document.querySelector('#root')).render(h2)

// const myName = 'Tanvir Ahmed'
// const h2 = <h2>Hello {myName} </h2>

// ReactDOM.createRoot(document.querySelector('#root')).render(h2)

const container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("p", null, "The library for web and native user interfaces"), /*#__PURE__*/React.createElement("img", {
  src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  style: {
    width: 200,
    backgroundColor: 'teal',
    borderRadius: 8,
    padding: 16
  }
})), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "username"
}, "Username"), /*#__PURE__*/React.createElement("input", {
  id: "username"
})), /*#__PURE__*/React.createElement("div", {
  className: "input-group"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "password"
}, "Password"), /*#__PURE__*/React.createElement("input", {
  id: "password",
  type: "password"
})))));
console.log(container);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);