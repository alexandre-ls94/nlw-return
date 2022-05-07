import { useState } from 'react'
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { CloseButton } from '../CloseButton'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

// keyof typeof feedbackTypes - converte o objeto feedbackTypes em tipo e pega a chave desse tipo
export type FeedbackType = keyof typeof feedbackTypes

// Object.entries(feedbackTypes) =>
// [
//   ['BUG', {
//     title: 'Problema',
//     image: {
//       source: bugImageUrl,
//       alt: 'Imagem de um inseto'
//     }
//   }],
//   ['IDEA', {
//     title: 'Ideia',
//     image: {
//       source: ideaImageUrl,
//       alt: 'Imagem de uma lampada'
//     }
//   }],
//   ['OTHER', {
//     title: 'Outro',
//     image: {
//       source: thoughtImageUrl,
//       alt: 'Imagem de uma nuvem de pensamento'
//     }
//   }]
// ]

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    // w-[calc(100vw-2rem)] - a largura padrão do componente é 100vw (largura total disponível) menos 2rem
    // md:w-auto - quando a tela for maior que 768px, a largura do componente é auto
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        <p>Hello world</p>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{' '}
        {/* underline-offset-2 - aplica distância de 2px do sublinhado */}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  )
}
