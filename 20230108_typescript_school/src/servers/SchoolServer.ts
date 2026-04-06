import express from 'express';
import cors from 'cors';
import SchoolRepositoryInterface from '../repositories/SchoolRepositoryInterface';
import Student from '../entities/Student';

export default class SchoolServer {
    _app: express.Express;

    constructor(private _port: number, private _schoolRepository: SchoolRepositoryInterface) {
        this._app = express();
        this._app.use(cors());
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: true }));

        this._configureRoutes();
    }


    listen() {
        this._app.listen(this._port, () =>
            console.log(`School server listening on port ${this._port}`)
        );
    }


    private _configureRoutes() {
        this._app.get('/api/students', this._sendStudents.bind(this));
    }


    private async _sendStudents(req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> {
        const students: Student[] = await this._schoolRepository.retrieveStudents();
        res.status(201).json({
            ok: true,
            students: students.map(({ uuid, firstname, lastname }) => ({ uuid, firstname, lastname }))
        });
    }
}