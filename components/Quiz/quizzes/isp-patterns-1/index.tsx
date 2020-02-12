import { IQuiz } from '../IQuiz'
import Question from './question.mdx'

export const ispPatterns1: IQuiz = {
  name: 'isp-patterns-1',
  question: <Question />,
  variants: [
    {
      text: 'Позволяет избежать наследования не связанных друг с другом сущностей'
    },
    {
      text:
        'Позволяет не засорять интерфейс одной сущности лишь ради того, чтобы её потомок мог реализовать какой-то метод'
    },
    {
      text: 'Позволяет композировать свойства нескольких сущностей в одной новой',
      description: 'Это позволяет делать множественное наследование'
    },
    {
      text: 'Вводит прослойку, через которую сущности могут общаться, что сильно упрощает архитектуру системы',
      description:
        'Адаптер действительно вводит прослойку, через которую сущности могут общаться друг с другом, но это наоборот может усложнить систему'
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}
