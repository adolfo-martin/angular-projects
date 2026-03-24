export default class Category {
    public constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly image?: string,
    ) {}
}