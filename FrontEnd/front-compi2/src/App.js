import Editor from '@monaco-editor/react'

export default function App() {
  return (
    <div>
      <div>
        <Editor
          height='50vh'
          theme='vs-dark'
          defaultLanguage='swift'
        />
      </div>

      <div>
        <Editor
          height='50vh'
          theme='vs-dark'
          defaultLanguage='swift'
        />
      </div>
    </div>


  )
}
