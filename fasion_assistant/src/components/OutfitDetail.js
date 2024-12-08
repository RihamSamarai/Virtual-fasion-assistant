

const OutfitDetai = ({outfit}) => {
    
    return (
        <div className="p-4">
            <h3>{outfit.name}</h3>
            <p>{outfit.description}</p>
        </div>

    );

};

export default OutfitDetai;