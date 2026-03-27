interface BaseRecord {
    id: string;
}


interface Pokemon {
    id: string;
    attack: number;
    defense: number;
}


interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}


// Factory pattern
function createDatabase<T extends BaseRecord>() {
    class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
        private db: Record<string, T> = {}
        // @ts-ignore
        static instance: InMemoryDatabase = new InMemoryDatabase();
        private constructor() {}

        public set(newValue: T): void {
            this.db[newValue.id] = newValue;
        }

        public get(id: string): T | undefined {
            return this.db[id]
        }
    }
 
    // Singleton pattern
    return InMemoryDatabase;
}


//-------------------------------------------
const pokemonDB = createDatabase<Pokemon>();
pokemonDB.instance.set({
    id: 'Bulbasur',
    attack: 50,
    defense: 10
})

console.log(pokemonDB.instance.get('Bulbasur'))