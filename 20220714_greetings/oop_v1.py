from datetime import datetime

def main() -> None:
    name = input('Enter your name: ')

    greeting = Greeting()
    greeting.greet(name )


class Greeting:
    def __init__(self) -> None:
        current_time = datetime.now()
        if current_time.hour < 12:
            self.greeting_intro = 'Good morning'
        elif current_time.hour < 18:
            self.greeting_intro = 'Good afternoon'
        else:
            self.greeting_intro = 'Good evening'

    def greet(self, name: str) -> None:
        print(f'{self.greeting_intro}, {name}.')

    def greet_list(self, names: list[str]) -> None:
        for name in names:
            self.greet(name)


if __name__ == '__main__':
    main()