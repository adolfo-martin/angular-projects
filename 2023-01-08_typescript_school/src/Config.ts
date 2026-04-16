import SchoolRepositoryInterface from './repositories/SchoolRepositoryInterface';
import SchoolRepositoryMock from './repositories/SchoolRepositoryMock';

export default class Config {
    static schoolRepositoryClass = SchoolRepositoryMock;
}