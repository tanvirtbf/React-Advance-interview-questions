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

const container = React.createElement('div', {className:'container'},
  [
    React.createElement('section',{key: 1, className: 'section1'},
    [
      React.createElement('h2',{key:1, className:'imageText'},'Image'),
      React.createElement('img',{key:2, className: 'image', src:'./images/DSC_0061.JPG', alt:'images'}),
      React.createElement('p',{key:3, className:'para',style:{fontSize:'20px'}},'This is Me')
    ]),
    React.createElement('section',{key:2, className: 'section2'},
    [
      React.createElement('h2',{key:1, className:'imageText'},'Image'),
      React.createElement('img',{key:2, className: 'image', src:'./images/DSC_0061.JPG', alt:'images', style: {width: '100px'}}),
      React.createElement('p',{key:3, className:'para',style:{fontSize:'25px'}},'This is Me')
    ])
  ]
)

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(container)










