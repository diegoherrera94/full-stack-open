import Person from './Person';

const Persons = ({persons, handleDelete}) => {
    return(
        <>
            {
                persons.map(p => <Person key={p.name} person={p} handleDelete={handleDelete} />)
            }
        </>
    );
}

export default Persons;