import { useState } from 'react'
import bundle from '../bundler'
import CodeEditor from './code-editor'
import Preview from './preview'
import Resizable from './resizable'

const CodeCell = () => {
  const [input, setInput] = useState('')
  const [code, setCode] = useState('')

  const onClick = async () => {
    const output = await bundle(input)
    setCode(output)
  }

  return (
    <Resizable direction="vertical">
      <div>
        <CodeEditor
          onChange={(value) => setInput(value)}
          initialValue="const a = 1"
        />
        <div>
          <button onClick={onClick}>Submit</button>
        </div>
        <Preview code={code} />
      </div>
    </Resizable>
  )
}

export default CodeCell