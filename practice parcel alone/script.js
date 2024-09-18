import React from 'react'
import {createRoot} from 'react-dom/client'

const card = React.createElement('div',{className:'card', style:{display:'flex', flexWrap:'wrap',gap:'20px'}},
  [
    React.createElement('img',{key:1, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:2, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:3, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:4, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:5, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:6, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:7, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:8, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}}),
    React.createElement('img',{key:9, className:'image', src:'https://beautybooth.com.bd/_next/image?url=https%3A%2F%2Fadmin.beautybooth.com.bd%2F%2Fuploads%2Fall%2F2FK8ylB5lJrDP9PnIGzensEaeaDcvT7jAD0ZGLxH.jpg&w=1920&q=75',alt:'image',style:{width:'200px', border:'1px solid'}})
  ]
)

const root = createRoot(document.getElementById('root'))

root.render(card)
