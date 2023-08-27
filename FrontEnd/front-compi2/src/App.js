import Editor from '@monaco-editor/react'
import { useState, useRef } from 'react'

export default function App() {
  const [contentTranslate, setContentTranslate] = useState('')
  const editorRef = useRef(null)
  const handleEditorDidMount = (editor, monaco) =>{
    editorRef.current = editor;
  }

  const handleTranslate = () => {
    const content = editorRef.current.getValue()
    const url = 'localhost:8080/texto'
    //fetch hacia el back
    const requestOptions = {
      method: 'POST',
      Headers: {'Content-Type':'application/json'},
      body: JSON.stringify({title: 'React POST Request Swift', data:content})
    };

    fetch(url,requestOptions   )
      .then( response => response.json())
      .then(data => this.setState({postId: data.id}));
     

  }

  return (
    <div>
      <button onClick={handleTranslate}>Traducir</button>
      <div>
        <Editor
          height='50vh'
          theme='vs-dark'
          defaultLanguage='swift'
          value={contentTranslate}
          onChange={(value)=> setContentTranslate(value)}
          onMount={handleEditorDidMount}
        />
      </div>

      <div style={ {width: '50%', margin:'auto'}}>
        <Editor
          height='50vh'
          theme='vs-dark'
          defaultLanguage='swift'
        />
      </div>
    </div>


  )
}
