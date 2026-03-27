from datetime import datetime
from typing import Callable

def main() -> None:
    print(greet(read_name(), read_greeting))
    print(greet_list(['John', 'Jane', 'Joe'], read_greeting))


GreetingReader = Callable[[], str]


def read_greeting() -> str:
    current_time = datetime.now()
    if current_time.hour < 12:
        return 'Good morning'
    elif current_time.hour < 18:
        return 'Good afternoon'
    else:
        return 'Good evening'

    name = input('Enter your name: ')

    greeting = Greeting(greeting_intro)
    greeting.greet(name )


def greet(name: str, greeting_reader: GreetingReader) -> str:
    return f'{greeting_reader()}, {name}.'


def greet_list(names: list[str], greeting_reader: GreetingReader) -> list[str]:
    return [greet(name, greeting_reader) for name in names]


def read_name() -> str:
    return input('Enter your name: ')


class Greeting:
    def __init__(self, greeting_intro: str) -> None:
        self.greeting_intro = greeting_intro


if __name__ == '__main__':
    main()