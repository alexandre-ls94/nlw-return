import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface IFeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export function FeedbackTypeStep(props: IFeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map((item) => {
          const [key, value] = item
          return (
            // flex-1 - aumenta a largura do componente além do padrão conforme a div também aumenta sua largura
            // focus:border-brand-500 - adiciona a borda na cor correta na navegação pelo teclado (acessibilidade)
            // focus:outline-none - retira a cor padrão da borda na navegação pelo teclado (acessibilidade)
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />

              <p>{value.title}</p>
            </button>
          )
        })}
      </div>
    </>
  )
}