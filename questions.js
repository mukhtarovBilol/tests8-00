const questions = [
  {
    "question": "Какой тип данных у значения True?",
    "options": ["int", "str", "bool", "float"],
    "correctIndex": 2
  },
  {
    "question": "Как в Python обозначается список?",
    "options": ["{}", "()", "[]", "<>"],
    "correctIndex": 2
  },
  {
    "question": "Как получить длину списка a?",
    "options": ["size(a)", "count(a)", "length(a)", "len(a)"],
    "correctIndex": 3
  },
  {
    "question": "Что делает функция input()?",
    "options": ["Выводит на экран", "Считывает ввод", "Завершает программу", "Переходит на новую строку"],
    "correctIndex": 1
  },
  {
    "question": "Какой из этих типов — строка?",
    "options": ["'Привет'", "123", "True", "[1, 2]"],
    "correctIndex": 0
  },
  {
    "question": "Что выведет print(10 // 3)?",
    "options": ["3.33", "3", "3.0", "Ошибка"],
    "correctIndex": 1
  },
  {
    "question": "Как создать цикл от 1 до 5?",
    "options": ["for i in range(5):", "for i in range(1, 6):", "while i < 5:", "for i = 1 to 5:"],
    "correctIndex": 1
  },
  {
    "question": "Что делает a.append(5), если a = [1, 2]?",
    "options": ["Удаляет 5", "Ничего", "Добавляет 5 в список", "Создаёт переменную a"],
    "correctIndex": 2
  },
  {
    "question": "Какое ключевое слово используется для создания функции?",
    "options": ["function", "func", "def", "define"],
    "correctIndex": 2
  },
  {
    "question": "Как вызвать функцию по имени hello?",
    "options": ["hello()", "call hello", "run hello", "use hello"],
    "correctIndex": 0
  },
  {
    "question": "Как проверить, есть ли элемент x в списке a?",
    "options": ["x in a", "a includes x", "x has a", "find x in a"],
    "correctIndex": 0
  },
  {
    "question": "Что делает оператор not?",
    "options": ["Инвертирует логическое значение", "Повторяет значение", "Удаляет значение", "Ничего не делает"],
    "correctIndex": 0
  },
  {
    "question": "Что делает break в цикле?",
    "options": ["Пропускает итерацию", "Завершает цикл", "Повторяет цикл", "Ничего"],
    "correctIndex": 1
  },
  {
    "question": "Какое значение возвращает функция без return?",
    "options": ["0", "null", "undefined", "None"],
    "correctIndex": 3
  },
  {
    "question": "Что такое кортеж в Python?",
    "options": ["Изменяемая последовательность", "Неизменяемый список", "Множество", "Словарь"],
    "correctIndex": 1
  },
  {
    "question": "Как обозначаются строки в Python?",
    "options": ["Кавычками", "Скобками", "Фигурными скобками", "Хэшами"],
    "correctIndex": 0
  },
  {
    "question": "Какой результат выражения: len('12345')?",
    "options": ["4", "5", "6", "Ошибка"],
    "correctIndex": 1
  },
  {
    "question": "Что делает range(3)?",
    "options": ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "[3, 2, 1]"],
    "correctIndex": 1
  },
  {
    "question": "Что делает метод split() у строки?",
    "options": ["Удаляет пробелы", "Разбивает строку", "Объединяет строки", "Превращает в список чисел"],
    "correctIndex": 1
  },
  {
    "question": "Что делает if в Python?",
    "options": ["Запускает цикл", "Проверяет условие", "Импортирует библиотеку", "Ничего не делает"],
    "correctIndex": 1
  },
  {
    question: "Какой результат будет у выражения `bool(0)`?",
    options: ["True", "False", "None", "0"],
    correctIndex: 1
  },
  {
    question: "Как получить последний элемент списка `a = [1, 2, 3]`?",
    options: ["a[-1]", "a[3]", "a[len(a)]", "a[last]"],
    correctIndex: 0
  },
  {
    question: "Что вернёт `type(3.14)`?",
    options: ["int", "number", "float", "double"],
    correctIndex: 2
  },
  {
    question: "Что делает `my_dict.get('ключ')`?",
    options: ["Получает значение по ключу", "Удаляет ключ", "Добавляет ключ", "Проверяет наличие ключа"],
    correctIndex: 0
  },
  {
    question: "Какой из способов вернёт список от 0 до 9 включительно?",
    options: ["range(10, 0)", "[0:10]", "range(11)", "list(range(0, 10))"],
    correctIndex: 3
  },
  {
    question: "Какой из операторов проверяет, входит ли элемент в список?",
    options: ["in", "has", "==", "include"],
    correctIndex: 0
  },
  {
    question: "Как создать словарь в Python?",
    options: ['["ключ": "значение"]', '{"ключ": "значение"}', '("ключ": "значение")', '<ключ: значение>'],
    correctIndex: 1
  },
  {
    question: "Какой результат будет у выражения `'Hello' + 'World'`?",
    options: ["HelloWorld", "Hello World", "Error", "Hello+World"],
    correctIndex: 0
  },
  {
    question: "Что делает `elif` в конструкции `if`?",
    options: ["Проверяет альтернативное условие", "Завершает условие", "Выполняет цикл", "Объявляет переменную"],
    correctIndex: 0
  },
  {
    question: "Какой метод используется для удаления элемента из списка по значению?",
    options: ["remove()", "delete()", "cut()", "drop()"],
    correctIndex: 0
  },
  {
    question: "Какой максимальный размер VARCHAR в MySQL?",
    options: ["255", "1024", "4096", "65535"],
    correctIndex: 2
  },
  {
    question: "Как создать новую таблицу?",
    options: ["NEW TABLE", "MAKE TABLE", "CREATE TABLE", "INIT TABLE"],
    correctIndex: 2
  },
  {
    question: "Что делает LIMIT 10 в конце SQL-запроса?",
    options: ["Ограничивает вывод 10 строками", "Выводит последние 10 строк", "Делит таблицу", "Пропускает первые 10 строк"],
    correctIndex: 0
  },
  {
    question: "Какой максимальный размер VARCHAR в MySQL?",
    options: ["255", "1024", "4096", "65535"],
    correctIndex: 2
  },
  {
    question: "Какая команда используется для добавления новой строки?",
    options: ["INSERT INTO", "ADD NEW", "UPDATE", "NEW ROW"],
    correctIndex: 0
  },
  {
    question: "Как выбрать все столбцы из таблицы students?",
    options: ["SELECT all FROM students;", "SELECT * FROM students;", "GET * FROM students;", "SHOW ALL students;"],
    correctIndex: 1
  },
  {
    question: "Как удалить все строки из таблицы users?",
    options: ["DELETE users;", "REMOVE FROM users;", "DELETE FROM users;", "TRUNCATE TABLE users;"],
    correctIndex: 2
  },
  {
    question: "Что делает команда SELECT в SQL?",
    options: ["Удаляет таблицу", "Обновляет данные", "Выбирает данные", "Создаёт таблицу"],
    correctIndex: 2
  },
  {
    question: "Какой тип данных лучше использовать для хранения текста фиксированной длины?",
    options: ["INT", "CHAR(n)", "FLOAT", "DATE"],
    correctIndex: 1
  },
  {
    question: "Что делает WHERE в SQL-запросе?",
    options: ["Задает сортировку", "Ограничивает количество строк", "Фильтрует строки по условию", "Изменяет таблицу"],
    correctIndex: 2
  },
  {
    question: "Чем VARCHAR отличается от CHAR?",
    options: ["VARCHAR хранит переменную длину", "VARCHAR только для чисел", "CHAR работает только с числами", "CHAR больше по объему"],
    correctIndex: 0
  }
];
