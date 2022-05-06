import { ChatTeardropDots } from 'phosphor-react'
// import { useState } from 'react'
import { Popover } from '@headlessui/react'

export function Widget() {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  // function toggleWidgetVisibility() {
  //   // toda vez que a função é chamada, o setIsWidgetOpen troca o valor da variável isWidgetOpen para o valor contrario a ele mesmo
  //   setIsWidgetOpen(!isWidgetOpen)
  // }

  return (
    <Popover className='absolute bottom-5 right-5'>

      {/* mostra o componente se isWidgetOpen for true, equivalente a {isWidgetOpen ? <p>Hello World</p> : null} */}
      {/* {isWidgetOpen && <p>Hello World</p> } */}
      <Popover.Panel><p>Hello World</p></Popover.Panel>

      {/* group - faz o agrupamento dos elementos do componente */}
      {/* <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'> */}
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6'/>

        {/* overflow-hidden - deixa invisível todos elementos que ultrapassarem a largura maxima */}
        {/* ease-linear - mantém duração da transição igual do começo ao fim */}
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-2'>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}