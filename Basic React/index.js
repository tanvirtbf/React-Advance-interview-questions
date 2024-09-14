const leftArrow = React.createElement('img',{className: 'left-arrow', src:'./images/left-arrow.png'})
const rightArrow = React.createElement('img',{className: 'right-arrow', src:'./images/right-arrow.png'})

const btn1 = React.createElement('button',{className: 'leftBtn'},leftArrow)
const btn2 = React.createElement('button',{className: 'rightBtn'},rightArrow)



const heading1 = React.createElement('h1',{className:'busket1'},'10')
const heading2 = React.createElement('h1',{className:'busket2'},'0')

const div1 = React.createElement('div',{className:'div1',id:'div1'},heading1)
const div2 = React.createElement('div',{className:'div2',id:'div2'},heading2)



const section = React.createElement('section',{className:'section'},div1,btn1,btn2,div2)



const root = ReactDOM.createRoot(document.querySelector('#root'))



root.render(section)










