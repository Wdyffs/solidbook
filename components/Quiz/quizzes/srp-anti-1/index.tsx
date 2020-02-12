import { IQuiz } from '../IQuiz'

export const srpAnti1: IQuiz = {
  name: 'srp-anti-1',
  question: 'Как именно божественный объект нарушает принцип единой ответственности?',
  variants: [
    {
      text: 'Решает слишком много слабо-связанных друг с другом задач'
    },
    {
      text: 'Хранит внутри себя чрезмерно много данных о слабо-связанных сущностях'
    },
    {
      text: 'Имеет большой размер и много методов',
      description:
        'Это не является прямым нарушением принципа, основная проблема — в слишком большом количестве ответственностей, которые берёт на себя такой объект'
    }
  ],
  meta: {
    correctAnswers: [0, 1]
  }
}
