const Country = ({name, handleClick}) => {
    return(
      <div>{name} <button onClick={() => handleClick(name)}>show</button></div>
    );
  }

export default Country;